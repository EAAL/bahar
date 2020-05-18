const app = require('express')();
const json = require('body-parser').json;
const cors = require('cors');
const morgan = require('morgan');
const todoRoutes = require('./routes/todo.routes');
const authRoutes = require('./routes/auth.routes');
const connection = require('./loaders/db.loader');
const PORT = 4000;

app.use(cors());
app.use(json());
app.use(morgan('combined'));
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

app.listen(PORT, function () {
  console.log('Server is running on Port: ' + PORT);
});

module.exports = { app };
