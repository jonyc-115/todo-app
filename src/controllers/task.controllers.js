import Task from "../models/tasks.model.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTask(req, res) {
  const { title, description } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
    });

    await newTask.save();

    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deletedTask(req, res) {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateTask(req, res) {
  const { title, description, date } = req.body;

  try {
    const taskFound = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      { title, description, date },
      { new: true }
    );

    if (!taskFound) return res.status(404).json({ message: "task not found" });

    res.json(taskFound);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
