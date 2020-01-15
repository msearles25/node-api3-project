const express = require('express');

const Posts = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'Problem retrieving messages'
      })
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
  Posts.getById(req.params.id)
    .then(post => {
      if(!post) {
        res.status(404).json({message: 'Post doesn\'t exist!'})
      } else {
        res.status(200).json(post);
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'Problem retrieving post.'
      })
    })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  Posts.remove(req.params.id) 
    .then(post => {
      if(!post) {
        res.status(404).json({ message: 'Post doesn\'t exist!'});
      } else {
        res.status(200).json(post);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error removing post.'});
    })
});

router.put('/:id', (req, res) => {
  // do your magic!
  Posts.update(req.params.id, req.body)
    .then(updated => {
      if(!updated) {
        res.status(404).json({ message: 'Could not edit, does not exist!'});
      } else {
        res.status(200).json(updated);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Post does not exist!'});
    })
    
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
