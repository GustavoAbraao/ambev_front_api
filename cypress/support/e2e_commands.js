Cypress.Commands.add('visitarPaginaLogin', () => {
  cy.visit('https://front.serverest.dev/login');
});

Cypress.Commands.add('validarMensagensCamposObrigatorios', () => {
  cy.get('[data-testid="cadastrar"]').click();
  cy.contains('Cadastro').should('be.visible');
  cy.get('[data-testid="cadastrar"]').click();
  cy.contains('Nome é obrigatório').should('be.visible');
  cy.contains('Email é obrigatório').should('be.visible');
  cy.contains('Password é obrigatório').should('be.visible');
});

Cypress.Commands.add('fazerCadastro', (nome, email, senha) => {
  cy.get('[data-testid="cadastrar"]').click();
  cy.contains('Cadastro').should('be.visible');
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(senha);
  cy.get('[data-testid="checkbox"]').check();
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('verificarCadastroComSucesso', () => {
  cy.contains('Cadastro realizado com sucesso').should('be.visible');
  cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible');
});


Cypress.Commands.add('loginSemSucesso', (email, senha) => {
  cy.get('[data-testid="entrar"]').click();
  cy.contains('Email é obrigatório').should('be.visible');
  cy.contains('Password é obrigatório').should('be.visible');
});

Cypress.Commands.add('verificarMensagensObrigatorias', (email, senha) => {
  cy.contains('Email é obrigatório').should('be.visible');
  cy.contains('Password é obrigatório').should('be.visible');
});

Cypress.Commands.add('loginComSucesso', (email, senha) => {
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(senha);
  cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('verificarLoginComSucesso', (email, senha) => {
  cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible');
});