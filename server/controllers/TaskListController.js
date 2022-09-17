import TaskList from '../models/TaskListModel.js';

// get all task list
export const getTaskList = async (req, res) => {
  try {
    const tasksList = await TaskList.find();
    res.json(tasksList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get task list by id
export const getTaskListById = async (req, res) => {
  try {
    const taskList = await TaskList.findById(req.params.id);
    res.json(taskList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// save task list
export const saveTaskList = async (req, res) => {
  const taskList = new TaskList(req.body);
  try {
    const insertedTaskList = await taskList.save();
    res.status(201).json(insertedTaskList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// edit task list
export const updateTaskList = async (req, res) => {
  try {
    const updatedTaskList = await TaskList.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedTaskList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//   delete task list
export const deleteTaskList = async (req, res) => {
  try {
    const deletedTaskList = await TaskList.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedTaskList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
