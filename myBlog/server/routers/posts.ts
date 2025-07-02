import {Router} from 'express';
import { getListOfPosts } from '../controllers/posts';
import { addNewPost } from '../controllers/posts';

const router = Router();

router.get('/all', getListOfPosts);
router.post('/add', addNewPost);

export default router;