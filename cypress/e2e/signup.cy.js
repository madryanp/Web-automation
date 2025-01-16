describe('sign Up', () => {
  it('with valid data', () => {
    //Go to url
    //Open the Sign up popup
    //input username
    //Input Password
    //Click the Sign up button
    //verify the user registered succesfully
    cy.visit('https://www.demoblaze.com/index.html');
    cy.xpath('//a[@id="signin2"]').click();
    cy.wait(5000);
    cy.xpath('//input[@id="sign-username"]').type('adryan123kocak');
    cy.wait(5000);
    cy.xpath('//input[@id="sign-password"]').type('adyran123');
    cy.wait(5000);
    cy.xpath('//button[@onclick="register()"]').click({timeout: 5000});

  })
})