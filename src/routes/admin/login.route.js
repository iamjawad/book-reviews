import express from 'express';
import BookController from '../../controllers/user/book.controller.js';

const router = express.Router();

router.get('/', BookController.get);

export default router;
