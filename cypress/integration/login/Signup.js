
describe('This is to Sign Up',function(){
    it('Email and Register',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email_create"]').type("amst@gmail.com")
        cy.get('button[id="SubmitCreate"]').click()
        cy.get('h1[class="page-heading"]').should(('be.visible'))
    })

    it('This is to Fill Out Information',()=>{
        cy.wait(2000)
        cy.get('input[id="id_gender1"]').check()
        cy.get('input[id="customer_firstname"]').type("Stewie")
        cy.get('input[id="customer_lastname"]').type("Griffin")
        //cy.get('input[id="email"]').type("helloada@gmail.com")
        cy.get('input[id="passwd"]').type("familyguy1")
        cy.get('select[id="days"]').select("13")
        cy.get('select[id="months"]').select("December")
        cy.get('select[id="years"]').select("2020")
        cy.get('input[id="company"]').click().type("Zorba")
        cy.get('input[id="address1"]').type("123 Spooner St")
        cy.get('input[id="city"]').type("'Quahog")
        cy.get('select[id="id_state"]').select("Rhode Island")
        cy.get('input[id="postcode"]').type("12345")
        cy.get('textarea[id="other"]').type("This is Zorba Automation")
        cy.get('input[id="phone"]').type("1234567890") 
        cy.get('input[id="phone_mobile"]').type("9876543210")
        // cy.get('button[id="submitAccount"]').click()
    })

})