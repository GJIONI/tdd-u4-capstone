const router = require('express').Router();
const {connectDatabase, disconnectDatabase} = require('../database');

router.get('/videos', (req, res) => {
     res.render('videos');
});

router.post('/videos', async (req, res) => {
   const {title, description} = request.body;
   
   
   if (title !== '') {
	  const newVideo = await Video.create({title, description});
	} 
   else {
	  res.status(400);
   }
   await response.send(`
  <h1>${title}</h1>
  <p>${description}</p>
	`);
   res.render('videos', {title, description});


});



module.exports = router;




