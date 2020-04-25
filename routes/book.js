const { Router } = require('express');
// ...other imports...
const router = Router();

// Load Book model\
const Book = require('../models/Book');

// add your middleware here so it will be used on dev server too
// router.use(bodyParser.json());

// endpoints in route

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfound: 'No Books found!'}));
});

// @route GET api/books/:id
// @description Get a single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: 'No Book found!'}));
});

// @route POST api/books
// @description add/save book 
// @access Public
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book was added successfully!'})
        .catch(err => res.status(404).json({error: 'Unable to add this book'})));
});

// @route PUT api/books
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Book updated successfully!'})
        .catch(err => res.status(404).json({error: 'Unable to update book :('})));
});

// @route DELETE api/books
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(book => res.json({msg: 'Book entry deleted successfully'})
        .catch(err => res.status(404).json({error: 'No such Book'}))); 
});

module.exports = router;