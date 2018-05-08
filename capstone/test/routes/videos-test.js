const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');
const app = require('../../app');
const {connectAndDrop, disconnect} = require('../../database');
const Video = require('../../models/video');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
	};

describe('Save Video', () => {
  beforeEach(connectAndDrop);
  afterEach(disconnect);
  
	
  describe('POST', () => {
    it('saves a new video', async () => {
       
      //setup
      const title = String;
      const description = String;
      //const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';
      
      //exercise
      const response = await 
      request(app)
        .post('/videos')
        .type('form')
        .send({title, description});
		
      
      //verify
      assert.equal(response.status, 201); 
      await Video.findOne({title, description});	  
      assert.include(parseTextFromHTML(response.text, '#title'), title);
      assert.include(parseTextFromHTML(response.text, '#description'), description);
      //assert.include(parseTextFromHTML(response.text, '#quotes'), source);      
      
      
      
    });
  });
  
  describe('POST', () => {
    it('does not save a video when missing title', async () => {
       
      //setup
      const title = '';
      //const description = String;
      //const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';
      
      //exercise
      const response = await 
      request(app)
        .post('/videos')
        .type('form')
        .send({title});
		
      
      //verify
      assert.equal(response.status, 400); 
     // await Video.findOne({title, description});	  
      assert.include(parseTextFromHTML(response.text, '#title'), '');
      //assert.include(parseTextFromHTML(response.text, '#description'), description);
      //assert.include(parseTextFromHTML(response.text, '#quotes'), source);      
      
      
      
    });
  });
});