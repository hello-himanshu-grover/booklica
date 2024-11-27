import { Request, Response } from 'express';
import Book from '../models/book';


export const addBook = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const userId = req.userId; 

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: User ID not found' });
    }

    const newBook = new Book({ name, user: userId });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding book:', error);
    if(error instanceof Error){
      if (error.name === 'ValidationError') {
        res.status(400).json({ message: 'Validation Error', error: error.message });
      } else {
        res.status(500).json({ message: 'Error adding book', error: error.message });
      }
    }
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const userId = req.userId; 

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: User ID not found' });
    }

    const books = await Book.find({ user: userId });
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    if(error instanceof Error){
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
  }
};
