import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";
import authComp from "../middleware/authComp.js";
import authAdmin from "../middleware/auth.js";



//user
router.get('/', getPosts);
router.post('/',auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

//compete
router.get('/', getPosts);
router.patch('/:id/likePost', authComp, likePost);

//admin
router.get('/', getPosts);
router.delete('/:id', authAdmin, deletePost);

export default router;