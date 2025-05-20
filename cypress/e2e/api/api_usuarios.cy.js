/// <reference types="Cypress"/>
import '../../support/api_commands';

describe('Teste de API para usuarios', () => {
    it('Deve fazer um POST para cadastrar um usuario', () => {
        cy.postUserData().then(userData => {
            cy.request({
                method: 'POST',
                url: `/usuarios`,
                body: userData,
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq('Cadastro realizado com sucesso');
                expect(response.body).to.have.property('_id');
                cy.storeUserId(response.body._id);
            });
        });
    });

    it('Deve fazer um PUT para alterar os dados do usuario', () => {
        cy.putUserId().then(userId => {
            cy.putUpdatedUserData().then(updatedUserData => {
                cy.request({
                    method: 'PUT',
                    url: `/usuarios/${userId}`,
                    body: updatedUserData,
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.message).to.eq('Registro alterado com sucesso');

                });
            });
        });
    });

    it('Deve fazer um GET para consultar o usuario alterado', () => {
        cy.getUserId().then(userId => {
            cy.request({
                method: 'GET',
                url: `/usuarios/${userId}`,
                headers: {
                    'accept': 'application/json'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('_id', userId);
            });
        });
    });

    it('Deve fazer um DELETE para deletar o usuario', () => {
        cy.deleteUserId().then(userId => {
            cy.request({
                method: 'DELETE',
                url: `/usuarios/${userId}`,
                headers: {
                    'accept': 'application/json'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('Registro excluído com sucesso');
            });
        });
    });
});
