let books = [];
let id = 0;


module.exports = {
    create(req, res) {
        let newBook = {
            id: id,
            title: req.body.title,
            author: req.body.author
        }
        id++;
        books.push(newBook);
        res.status(200).send( books );
    },

    read(req, res) {
        res.status(200).send( books );
            },

    update(req, res) {
        const id = parseInt(req.params.id, 10);
        const bookToUpdate = books.filter( function(book){
            return book.id === id;
        })
        bookToUpdate[0].author = req.body.author;
        bookToUpdate[0].title = req.body.title;

        res.status(200).send( books );
    },

    delete(req, res) {
        const id = parseInt(req.params.id, 10);
        books = books.filter( (book) => book.id !== id);;

        res.status(200).send( books );
            }
}