import express from 'express';
import BookRouter from './routes/user/book.route.js';
import AdminRouter from './routes/admin/index.route.js';

// Get the express app instance.
const app = express();
// Port of the application.
const port = 3000;

// Used for sending JSON response.
app.use(express.json());

// Enable url parsing url encoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

// using EJS as a template engine
app.set('view engine', 'ejs');

// Set public folder accessible
app.use("/public", express.static("../public"));

// Root of the document.
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Register books route;
app.use('/books', BookRouter);
app.use('/admin', AdminRouter);


// Start the server, check the console for link of the sever.
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


