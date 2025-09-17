const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

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

module.exports = app;
