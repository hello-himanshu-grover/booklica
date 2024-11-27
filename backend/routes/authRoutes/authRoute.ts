import { Router } from 'express';
import { login, signup ,validateUser} from '../../controllers/authController';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/validateuser',validateUser);

export default router;
