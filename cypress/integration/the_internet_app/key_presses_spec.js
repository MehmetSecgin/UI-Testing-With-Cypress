describe("Key Presses Page", () => {
    before(() => {
        cy.visit("/key_presses");
    });

    it('should be in the page', () => {
        cy.url().should("contain","key_presses")
    });
    it('should write "A"',  () => {
        cy.input_keyboard("A")
    });


    it('should write "BackSpace"',  () => {
        cy.input_keyboard_special("BackSpace")
    });

    it('should write "Shift"',  () => {
        cy.input_keyboard_special("Shift")
    });

});