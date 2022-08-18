import express from 'express';
// import BookController from '../../controllers/user/book.controller.js';
import HomeController from '../../controllers/admin/home.controller.js';

const router = express.Router();

const base = '/admin';

router.get(`/`, HomeController.get);
// router.get(`${base}/`, HomeController.get);

export default router;
