describe("Verify the functionality of radio button , checkbox and drop", function () {

    it('validate the radi button functionality', function () {
        // tagName[attribute="value"]
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="blue"]').check()
        cy.get('input[value="blue"]').should('be.checked')
        cy.get('input[value="green"]').should('not.be.checked')

    })

    it('validate the functionality of checkbox', function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-2"]').check()
        cy.get('input[value="option-2"]').should('be.checked')
        cy.get('input[value="option-3"]').uncheck()
        cy.get('input[value="option-3"]').should('not.be.checked')

    })

    it('validate the functionality of checkbox by selecting all', function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').each(function (el, index) {
            if (index == 2) {
                cy.wrap(el).uncheck()
                cy.wrap(el).should('not.be.checked')
            }
            else {
                cy.wrap(el).check()
                cy.wrap(el).should('be.checked')

            }

        })


    })

    it('validate the functionality of drop down list', function () {

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // For Drop list we can always select by value  or text
        // For normal drop drop list there should be select tag
        //cy.get('#dropdowm-menu-1')
        cy.get('select[id="dropdowm-menu-1"]').select('python')
        //cy.get('select[id="dropdowm-menu-1"]').select('Python')
        cy.get('option[value="python"]').should('be.selected')


    })
    it('validate whether a particular element is checked or unchecked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.enabled')

    })
    
})