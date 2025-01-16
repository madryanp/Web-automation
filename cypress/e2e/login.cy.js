describe('login', () => {
    it('with valid data', () => {
      //Go to url
      //Open the login popup
      //input username
      //Input Password
      //Click the login button
      //verify the user login succesfully
      cy.visit('https://www.demoblaze.com/index.html');
      cy.xpath('//*[@id="login2"]').click();
      cy.wait(5000);
      cy.xpath('//input[@id="loginusername"]').type('adryan123kocak');
      cy.wait(5000);
      cy.xpath('//input[@id="loginpassword"]').type('adyran123');
      cy.wait(5000);
      cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click({timeout: 5000});

      // After login, the user should be redirected to the dashboard
      cy.url().should('include', '/index.html');
      // and check the status user at dashboard after login
      cy.get('a').should('contain.text', 'Welcome adryan123kocak');

    })

    // it('should show an error with invalid credentials', () => {
    //     // Provide invalid login credentials
    //     cy.xpath('//input[@id="loginusername"]').type('wronguser');
    //     cy.wait(5000);
    //     cy.xpath('//input[@id="loginpassword"]').type('wrongpassword');
    //     cy.wait(5000);
    //     cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click({timeout: 5000});


    //     // Check if an error message is displayed
    //     cy.get('.error-message').should('be.visible').and('contain.text', 'Invalid username or password');
    //   });
    });
