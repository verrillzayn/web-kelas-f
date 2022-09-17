import express from 'express';
import { getTaskList, getTaskListById, saveTaskList, updateTaskList, deleteTaskList } from '../controllers/TaskListController.js';

const router = express.Router();

router.get('/task-list', getTaskList);
router.get('/task-list/:id', getTaskListById);
router.post('/task-list', saveTaskList);
router.patch('/task-list/:id', updateTaskList);
router.delete('/task-list/:id', deleteTaskList);

export default router;
