import * as taskService from "./tasks.services.js";

export const createTask = async (req, res) => {
  const { title, description, user_id } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const task = await taskService.createTask(title, description, user_id);
    return res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const task = await taskService.updateTask(parseInt(id), title, description);
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskService.deleteTask(parseInt(id));
    return res.status(200).json({
      message: "Task deleted successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTask(req.user.id);
    return res.status(200).json({
      message: "Tasks retrieved successfully",
      tasks,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
