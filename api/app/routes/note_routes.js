const db = {
  oliva: {
    token: 1,
    chat_id: 2,
  }
}

module.exports = function(app, db) {
  app.post("/notes", (req, res) => {
    // Здесь будем создавать заметку.
    // console.log(req.site);
    // console.log(req.body)
    console.log(req.body.tosend);
    res.send("Hello");
  });
};
