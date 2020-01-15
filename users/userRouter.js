const express = require('express');

const Users = require('./userDb');
const Posts = require('../posts/postDb');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  Users.insert(req.body)
    .then(user => {
      if(!req.body.name) {
        res.status(400).json({ message: 'You need a name!' });
      } else {
        res.status(201).json(user);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Problem creating user.' });
    })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  const userInfo = { ...req.body, user_id: req.params.id }

  Posts.insert(userInfo)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error adding post.' });
    })
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving users!'});
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
  Users.getById(req.params.id) 
    .then(user => {
      if(!user) {
        res.status(404).json({ message: 'User does not exist!'});
      } else {
        res.status(200).json(user);
      }
    })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  Users.getUserPosts(req.params.id) 
    .then(posts => {
      if(posts.length === 0) {
        res.status(404).json({ message: 'User has no posts!' });
      } else {
        res.status(200).json(posts);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving posts.' });
    })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  Users.remove(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error removing user.' }) ;
    })
});

router.put('/:id', (req, res) => {
  // do your magic!
  Users.update(req.params.id, req.body)
    .then(updated => {
      if(!updated) {
        res.status(404).json({ message: 'User could not be found!' });
      } else {
        res.status(200).json(updated);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error updating user.' })
    })
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
