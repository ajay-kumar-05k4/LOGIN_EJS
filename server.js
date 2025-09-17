const express = require('express');
const app = express();


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  let { user, pass } = req.body;

  if (user === "Ajay" && pass === "1234") {
    res.render('dashboard', { user });
  } else {
    res.render('login', { error: "Invalid username or password!" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
