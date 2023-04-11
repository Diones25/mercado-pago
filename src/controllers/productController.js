
const create = (req, res) => {
  res.render("create.ejs")
}

const list = (req, res) => {
  res.render("list.ejs")
}

export default {
  create,
  list
}