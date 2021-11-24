describe('Navigation', () => {
  it('should navigate to most pages and check for some content', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="index-continue-link"]').should('exist');
    cy.get('[data-cy="index-register-link"]').should('exist');
    cy.get('[data-cy="index-login-link"]').click();
    cy.get('[data-cy="home-exercises-link"]').click();
    cy.get('[data-cy="home-singleExercise-link"]').should('exist');

    // cy.get('nav').should('contain', 'theme');
  });
});
