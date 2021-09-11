describe('validate the login functionality',function(){
    //tagName[attribue='value']
    // cy.visit()
    //cy.get()// to get the elements

    it('login with valid credential',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('input[name="passwd"]').type('chinmay010')
        cy.get('button[id="SubmitLogin"]').click()
        cy.get('h1[class="page-heading"]').should('be.visible')

    })

    it('login with invalid credential',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('input[name="passwd"]').type('chinmay01')
        cy.get('button[id="SubmitLogin"]').click()
        cy.get('ol > li').should('be.visible')

        
    })

    // <h1 id = 'ad' class ='asd'>Heading</h1>
    //tagName[attribute='value']

    it('validate the navigation tab',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('a[title="Women"]').should('have.text','Women')
        cy.get('a[title="Women"]').should('have.attr','class')
        cy.get('a[title="Dresses"]').should('be.visible')
        cy.get('a[title="T-shirts"]').should('be.visible')
        // cy.get('a[title="Women"]').should('have.attr', 'href', '/users')
    
    })

    it('validate logo on homePage',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('img[alt="My Store"]').should('be.visible')
    
    })

    it.only('validate logout',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('input[name="passwd"]').type('chinmay010')
        cy.get('button[id="SubmitLogin"]').click()
        cy.get('a[title="Log me out"]').click()
        cy.get('h1[class="page-heading"]').should('be.visible')
    
    })

})