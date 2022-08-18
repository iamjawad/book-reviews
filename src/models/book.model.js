import query from '../services/db.js';
import config from '../configs/db.config.js';

class BookModel {
    static async get(page = 1){
        const offset = (page - 1) * config.listPages;
        const rows = await query(
            `SELECT * FROM books LIMIT ${offset},${config.listPages}`
        );
        const data = rows ? rows : [];
    
        return {
            data,
            page
        }
    }
}


export default BookModel