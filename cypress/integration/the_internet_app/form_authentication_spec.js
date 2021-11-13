describe("Form authentication page", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('should login to secure area with valid credentials', function () {
        cy.login("tomsmith", "SuperSecretPassword!")

        cy.get(".flash.success").should("contain","You logged into a secure area!");
    });
});
