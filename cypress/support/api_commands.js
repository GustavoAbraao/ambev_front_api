const userData = {
    nome: "Fulano da Silva",
    email: "beltrano37@qa.com.br",
    password: "teste",
    administrador: "true"
};

const updatedUserData = {
    nome: "Beltrano da Silva",
    email: "novobeltrano@qa.com.br",
    password: "teste",
    administrador: "true"
};

Cypress.Commands.add('storeUserId', (userId) => {
    Cypress.env('userId', userId);
});

Cypress.Commands.add('postUserData', () => {
    return userData;
});

Cypress.Commands.add('putUpdatedUserData', () => {
    return updatedUserData;
});

Cypress.Commands.add('getUserId', () => {
    return Cypress.env('userId');
});

Cypress.Commands.add('setBaseUrl', (baseUrl) => {
    Cypress.config('baseUrl', baseUrl);
});

beforeEach(() => {
    cy.setBaseUrl('https://serverest.dev/');
});

Cypress.Commands.add('putUserId', () => {
    return cy.getUserId();
});

Cypress.Commands.add('deleteUserId', () => {
    return cy.getUserId();
});
