
const create = (req, res) => {
  res.render("create.ejs")
}

const  dashboard= (req, res) => {
  res.render("dashboard.ejs")
}

const list = (req, res) => {
  res.render("list.ejs")
}

export default {
  create,
  list,
  dashboard
}