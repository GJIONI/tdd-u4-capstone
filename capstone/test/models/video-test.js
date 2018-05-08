const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');
const {connectAndDrop, disconnect} = require('../../database');
const Video = require('../../models/video');

describe('Video', () => {
  beforeEach(connectAndDrop);
  afterEach(disconnect);
  

  describe('title', () => {
    it('title is a string', () => {
       const titleAsInt = 1;
       const video = new Video({title:
         titleAsInt});
        
      
       assert.strictEqual(video.title, titleAsInt.toString());
    });
           
  });
  
  describe('description', () => {
    it('description is a string', () => {
       const descriptionAsInt = 1;
       const video = new Video({description:
         descriptionAsInt});
        
      
       assert.strictEqual(video.description, descriptionAsInt.toString());
    });
           
  });
  
});



