const {assert} = require('chai');


describe('user visiting land page', () => {
   describe('with no existing videos', () => {
	  it('shows no videos', () => {
		 browser.url('/'); 
		 
		 assert.equal(browser.getText('#videos-container'),'');
	  });
   });
   
   describe('and can navigate', () => {
	it('to videos/create.html', () => {
		//setup
		browser.url('/videos');
		
		//exercise
		browser.click('a[href="videos/create.html"]');
		
		//verification
		assert.include(browser.getText('body'), 'Save a video');
	});
});