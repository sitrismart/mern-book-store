import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Route for get book by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Route for create a new book
router.post('/', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: 'All fields are required',
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);

  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Route for update book by id
router.put('/:id', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: 'All fields are required',
      });
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: 'Book not found' });
    }

    return res.status(200).send({ message: 'Book updated successfully' });

  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Route for delete book by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: 'Book not found' });
    } 

    return res.status(200).send({ message: 'Book deleted successfully' });

  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

export default router;