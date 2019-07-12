context('Navigation', () => {
    it('Go to login page', () => {
        cy.visit('https://s.app.healthmachine.io/admin/login')
        cy.get('#session_new > div > div:nth-child(3) > label > a').click()
        cy.go('back')
        cy.contains('Terms and conditions').click()
        cy.go('back')
        cy.get('#user_email').type('admin@gmail.com')
        cy.get('#user_password').type('admin#123')

        cy.get('#user_accepted_cookies_at').check()
        cy.get('#user_accepted_terms_and_conditions_at').check()
        cy.get('#login_btn').click()
        cy.get('.flash').should('be.visible')
            //the above code is for valid test scenarios
            //test scenario with valid input but checkbox is not checked

        cy.visit('https://s.app.healthmachine.io/admin/login')

        cy.get('#user_email').type('admin@gmail.com')
        cy.get('#user_password').type('admin#123')

        cy.get('#user_accepted_cookies_at').check()

        cy.get('#login_btn').should('be.disabled')

        //test scenario 3: text field remains blank only check the checkbox
        cy.visit('https://s.app.healthmachine.io/admin/login')

        cy.get('#user_accepted_cookies_at').check()
        cy.get('#user_accepted_terms_and_conditions_at').check()
        cy.get('#login_btn').click()
        cy.get('#login_btn').should('be.visible')
            //forgot password link
        cy.contains('Click here').click()
        cy.title().should('include', '[staging] - HealthMachine')

        cy.contains('Take me back to sign in page').click()
            //footer links

        cy.get('p > .display-inline').click() //it's taking too much time to load
        Cypress.config('pageLoadTimeout', 100000)
            // cy.wait(90000)
        cy.title().should('include', 'Home - Avegen')
        cy.get('#footer_wrapper > footer > div > div > ul > li:nth-child(2) > a').click()
        cy.get('#footer_wrapper > footer > div > div > ul > li:nth-child(3) > a').click()

        // 

        //once the user login then next time he should not display the T&C and privacy policy checkbox

        // cy.visit('https://s.app.healthmachine.io/admin/login')
        // cy.get('#session_new > div > div:nth-child(3) > label > a').click()
        // cy.go('back')
        // cy.contains('Terms and conditions').click()
        // cy.go('back')
        //  cy.get('#user_email').type('admin@gmail.com')
        //cy.get('#user_password').type('admin#123')
        // cy.get('#login_btn').click()
        // cy.get('#login_btn').should('be.visible')

    })

})