import express from 'express';
import upload from '../middlewares/multer.middleware';
import { signUp } from '../controllers/auth.controllers';

const router = express.Router();

router.post('/sign-up', upload.single('avatar'), signUp); // User signUp

export default router;
