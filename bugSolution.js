const express = require('express');
const app = express();
app.get('/', async (req, res, next) => {
  try {
    // Asynchronous operation
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    // Proper error handling
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong');
} 