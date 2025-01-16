describe('About Us Page Test', () => {
    beforeEach(() => {
      // Visit the "About Us" popup 
      cy.visit('https://www.demoblaze.com/index.html');
      cy.xpath('//*[@id="navbarExample"]/ul/li[3]/a').click();
      cy.wait(5000);
    });

    it('should display the correct "About Us" page', () => {
        // Check if the URL is correct
        cy.url().should('include', '/index.html');
    
        // Verify the popup is "About Us"
        cy.get('h5').should('contain.text', 'About us');
        
        // Check if the page contains some specific text or description related to "About Us"
        cy.get('video').should('have.attr', 'poster', 'imgs/front.jpg');
    
       
      });
    })