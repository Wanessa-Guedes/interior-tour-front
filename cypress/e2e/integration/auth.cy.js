/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("auth pages e2e tests", () => {
  it("should got to sign-up page when click on 'ainda não tem uma conta' button", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get("#button-go-sign-up").click();
    cy.url().should("be.equal", "http://localhost:3000/sign-up");
  });

  it("should got to main page when click on 'voltar para página principal' button", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get("#button-go-main-page").click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });

  it("should go to sign-up page and register an user", () => {
    const user = {
      email: faker.internet.email(),
      username: faker.name.firstName(),
      profilepicture: faker.internet.url(),
      password: faker.internet.password(),
    };
    cy.visit("http://localhost:3000/sign-in");
    cy.get("#button-go-sign-up").click();
    cy.url().should("be.equal", "http://localhost:3000/sign-up");
    cy.get('input[placeholder="E-mail"]').type(user.email);
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Profile Picture"]').type(user.profilepicture);
    cy.get('input[placeholder="Password"]').type(user.password);
    cy.get('input[placeholder="Confirm Password"]').type(user.password);
    cy.get("#button-submit").click();
    cy.url().should("be.equal", "http://localhost:3000/sign-in");
  });

  it("should sign-in correctly", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});
