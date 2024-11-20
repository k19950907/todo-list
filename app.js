const express = require("express")
const app = express()

app.get("/todos", (req, res)  => {
  res.send("get all todos")
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

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})