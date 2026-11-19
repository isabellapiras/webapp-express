import express from 'express';

const router = express.Router();


//Create Read Update Delete

// Index
router.get('/', (req, res) => {
    res.send('Books list')
});

// Show
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`${id} info`)
});

// Store
router.post('/', (req, res) => {
    res.send('Enter a new book')
});

// Update
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`Update ${id}`)
});

// Modify
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`Modify ${id} info`)
});

// Destroy
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`Delete ${id}`)
});

export default router;


