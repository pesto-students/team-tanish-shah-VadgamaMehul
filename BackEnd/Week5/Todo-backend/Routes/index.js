const router = require("express").Router();
const Todo = require("../models/Todo");

// rotes will be here...

// Display the list of tasks
router.get("/", async (req, res) => {
  const alltodo = await Todo.find();
  res.send(alltodo);
});

//View details of a specific task
router.get("/task/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send("No task found");
    }
    res.send(todo);
  } catch (error) {
    console.error("Error while fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

//Update task
router.put("/updateTask/:id", async (req, res) => {
  try {
    let updatedData = req.body;
    const updateResult = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      updatedData,
      { new: true }
    );
    if (!updateResult) {
      return res.status(404).send("No Task Found");
    }
    res.send(updateResult);
  } catch (err) {
    console.log("Error in updating the data : ", err);
    res.status(500).send("Server Error");
  }
});

//Add a new task
router.post("/add", (req, res) => {
  const { task } = req.body;
  const newTodo = new Todo({ task });
  newTodo
    .save()
    .then(() => {
      console.log("Successfully added.....");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

//Delete a task
router.delete("/remove/:id", async (req, res) => {
  try {
    const removeResult = await Todo.findByIdAndRemove(req.params.id);
    if (!removeResult) {
      return res.status(404).send("No Task Found");
    }
    res.send(`Deleted ${removeResult}`);
  } catch (err) {
    console.log("Error in deleting the data : ", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
