context('Navigation', () => {
    it('Go to Home page', () => {
        cy.visit('https://avegenhealth.com')
        Cypress.config('pageLoadTimeout', 100000)

        cy.title().should('include', 'Home - Avegen')
            // cy.scrollTo(0, 500)
        cy.get('#menu-item-1101 > a > .avia-menu-text').click()
        Cypress.config('pageLoadTimeout', 100000)
        cy.title().should('include', 'About - Avegen')

        cy.get('[href="https://avegenhealth.com/care-episodes/"] > .avia-menu-text').click()

        cy.contains('Our Technology').click()
        Cypress.config('pageLoadTimeout', 100000)
        cy.title().should('include', 'Our Technology - Avegen')
        cy.contains('Careers').click()
        Cypress.config('pageLoadTimeout', 100000)
        cy.title().should('include', 'Careers - Avegen')
        cy.contains('Contact').click()
        Cypress.config('pageLoadTimeout', 100000)
        cy.title().should('include', 'Contact - Avegen')
        cy.contains('Press').click()
        Cypress.config('pageLoadTimeout', 100000)
        cy.title().should('include', 'Press - Avegen')
            // cy.contains('ul', 'Linkedin').click()
            // Cypress.config('pageLoadTimeout', 100000)
            //  cy.contains('ul', 'Twitter').click()
            //  cy.get('#header_main > div > div > span > a > img').click()
            //Cypress.config('pageLoadTimeout', 100000)
        cy.get('#menu-main-menu > #menu-item-1094 > a').click()
        Cypress.config('pageLoadTimeout', 100000)

        cy.title().should('include', 'Home - Avegen')
        cy.get('#menu-main-menu > #menu-item-1101 > a').click()

        Cypress.config('pageLoadTimeout', 100000)

        cy.title().should('include', 'About - Avegen')
        cy.get('#menu-main-menu > #menu-item-2736 > .sub-menu > #menu-item-2738 > a').click()
        Cypress.config('pageLoadTimeout', 100000)

        cy.title().should('include', 'Cardiac Rehabilitation - Avegen')
        cy.get('#menu-main-menu > #menu-item-3057 > a').click()
        Cypress.config('pageLoadTimeout', 100000)

        cy.title().should('include', 'Our Technology - Avegen')
        cy.get('#menu-main-menu > #menu-item-1129 > a').click()
        Cypress.config('pageLoadTimeout', 100000)

        cy.title().should('include', 'Careers - Avegen')
            //cy.get('#menu-main-menu > #menu-item-1097 > a').click()
            // Cypress.config('pageLoadTimeout', 100000)
            // cy.tick().should('include', 'Contact - Avegen')

        cy.get('#menu-main-menu > #menu-item-3038 > a').click()
        Cypress.config('pageLoadTimeout', 100000)
        cy.title().should('include', 'Press - Avegen')

        cy.get('#menu-legal > #menu-item-2087 > a').click()
        Cypress.config('pageLoadTimeout', 100000)

        cy.get('#menu-item-2087 > a > span.avia-menu-text').click()
        cy.title().should('include', 'Privacy Policy - Avegen')

    })
})