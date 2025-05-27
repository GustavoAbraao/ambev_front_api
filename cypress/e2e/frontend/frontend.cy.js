/// <reference types="Cypress"/>
import '../../support/e2e_commands';
import { faker } from '@faker-js/faker';

let nome;
let email;
let senha;

describe('Testes funcionais Frontend', () => {
  before(() => {
    nome = faker.person.fullName();
    email = faker.internet.email();
    senha = faker.internet.password(8);
  });

  beforeEach(() => {
    cy.visitarPaginaLogin();
  });

  it('Deve exibir mensagens de erro ao cadastrar sem preencher os campos', () => {
    cy.validarMensagensCamposObrigatorios();
  });

  
  it('Deve fazer o cadastro com sucesso', () => {
    cy.fazerCadastro(nome, email, senha);
    cy.verificarCadastroComSucesso();
  });

    it('Deve fazer login sem sucesso', () => {
    cy.loginSemSucesso();
    cy.verificarMensagensObrigatorias();
  });

    it('Deve fazer login com sucesso', () => {
      cy.loginComSucesso(email, senha);
      cy.verificarLoginComSucesso();
  });

  afterEach(function () {
    const testName = this.currentTest.title.replace(/ /g, '_');
    cy.screenshot(`screenshot-${testName}`);
  });
});