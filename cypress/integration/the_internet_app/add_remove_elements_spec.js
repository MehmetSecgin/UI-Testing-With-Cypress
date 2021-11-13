describe("Add/Remove Elements Page", () => {
    before(() => {
        cy.visit("add_remove_elements/");
    });

    it('should be in the page', () => {
        cy.url().should("contain","add_remove_elements")
    });

    it('should add element', function () {
        cy.get('div[class=example]').find('button').click();

        cy.get('#elements .added-manually').should("have.length",1)
    });

    it('should delete element', function () {
        cy.get('#elements .added-manually').click().should("have.length",0)

    });

    it('should add 2 elements and delete one of them', function () {
        cy.get('div[class=example]').find('button').click().click();


    });
    it('should delete one of the elements', function () {

        cy.get('#elements .added-manually').should("have.length",2).first().click();
        cy.get('#elements .added-manually').should("have.length",1);
    });
});