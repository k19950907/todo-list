const express = require("express")
const app = express()

const { engine } = require("express-handlebars")

const port = 3000

const db = require("./models")
const Todo = db.Todo

app.engine(".hbs", engine({extname: ".hbs"}))
app.set("view engine", ".hbs")
app.set("views", "./views")

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/todos", (req, res)  => {
  return Todo.findAll({
    attributes: ["id", "name"],
    raw: true
  })
    .then((todos) => res.render("todos", {todos}))
})

app.get("/todos/new", (req, res) => {
  return res.render("new")
})

app.post("/todos", (req, res) => {
  const name = req.body.name

  return Todo.create({ name })
    .then(() => res.redirect("/todos"))
})

app.get("/todos/:id", (req, res)=> {
  const id = req.params.id
  return Todo.findByPk(id, {
    attributes: ["id", "name"],
    raw: true
  })
    .then((todo) => res.render("todo", { todo }))
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