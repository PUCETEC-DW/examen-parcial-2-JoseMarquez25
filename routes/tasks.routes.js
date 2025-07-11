import { Router } from 'express';
import {
  createTaskHandler,
  listTasksHandler,
  updateTaskHandler,
  deleteTaskHandler,
  summaryHandler
} from '../controllers/tasks.controller.js';

const router = Router();

router.post('/', createTaskHandler);
router.get('/', listTasksHandler);
router.put('/:id', updateTaskHandler);
router.delete('/:id', deleteTaskHandler);
router.get('/summary', summaryHandler);

export default router;
