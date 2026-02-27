require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

app.post("/tasks", async(req,res) =>{
    try{
        const{title, isCompleted} = req.body;
        const task = await Task.create({
         title
})
       res.status(201).json({
        msg:"Done Created Task",
        data: task
});

    }
    catch(error){
        console.log(error);
    }
});

// DB Connection
mongoose
.connect("mongodb://127.0.0.1:27017/debug")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () =>{console.log(`Server running on port ${port}`)}); 
