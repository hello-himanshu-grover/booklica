import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';

export const signup = async (req:Request,res:Response) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already Exists'})
        }

        const user = new User({username,email,password});
        await user.save();

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET || 'my secret',{expiresIn:'1h'})
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

export const login = async (req:Request,res:Response) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const validPassword = await user.comparePassword(password);
        if(!validPassword){
            return res.status(400).json({message: 'Invalid credentials'})
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'my secret', { expiresIn: '1h' });
        res.status(200).json({token})

    } catch (error) {
        console.log("🚀 ~ file: authController.ts:28 ~ login ~ error:", error)
        res.status(500).json({ message: 'Server error' });
    }
}

interface DecodedToken {
    id: string;
    iat: number;
    exp: number;
  }

export const validateUser = async (req:Request,res:Response) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    const parts = authHeader.split(' ');
  
    if (parts.length !== 2) {
      return res.status(401).json({ message: 'Token error' });
    }
  
    const [scheme, token] = parts;
  
    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ message: 'Token malformatted' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
      console.log("🚀 ~ file: authMiddleware.ts:39 ~ authMiddleware ~ decoded:", decoded)
      const userId = decoded.id;
      const user = await User.findById(userId);
      return res.status(200).json({user})
    } catch (error) {
      return res.status(401).json({ message: 'Token invalid' });
    }
}