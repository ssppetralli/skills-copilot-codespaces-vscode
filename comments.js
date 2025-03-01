// Create web server
// 1. Create a web server
// 2. Create a route for the URL "/comments"
// 3. Create a function that returns a list of comments
// 4. Create a route for the URL "/comments/:id"
// 5. Create a function that returns a specific comment
// 6. Start the web server
const express = require('express');
const app = express();
const PORT = 3000;

const comments = [
  {
    id: 1,
    name: 'John Doe',
    email: '