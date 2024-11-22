const express = require("express")
const app = express()
const port = 3000

const db = require("./models")
const Todo = db.Todo

app.get("/todos", (req, res)  => {
  return Todo.findAll()
    .then((todos) => res.send({ todos }))
})

app.get("/todos/new", (req, res) => {
  res.send("creat todo")
})

app.post("/todos", (req, res) => {
  res.send("add todo")
})

app.get("/todos/:id", (req, res)=> {
  res.send(`get todo: ${req.params.id}`)
})

app.get("/todos/:id/edit", (req, res) => {
  res.send(`get todo edit: ${req.params.id}`)
})

app.put("/todos/:id", (req, res) => {
  res.send("modify todo")
})

app.delete("/todos/:id", (res, req) => {
  res.send("delete todo")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})