import BookModel from '../../models/book.model.js';

class BookController{
    static async get(req, res, next) {
       
        try {
            // res.json(await BookModel.get(req.query.page));
            const books = await BookModel.get(req.query.page);
            res.render('user/books/index', {books: books.data});

        } catch (err) {
            console.error(`Error while getting Books`, err.message);
            next(err);
        }
      }
}

export default BookController;
