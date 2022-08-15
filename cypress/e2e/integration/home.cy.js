/// <reference types="cypress" />

describe("main page e2e tests", () => {
  it("should visit the main page and be redirect to city page when click 'conheça mais'", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-know-more:first").click();
    cy.wait("@mainpage");
    cy.url().should("be.equal", "http://localhost:3000/city/1");
  });

  it("should be redirect to sign-in page if clicks in any interaction button (like, favorite or visited) and is not logged yeat", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-like:first").click();
    cy.wait("@mainpage");
    cy.url().should("be.equal", "http://localhost:3000/sign-in");
  });

  it("should be redirect to cities by state page if clicks in a state in search bar", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get('input[placeholder="Busque um estado..."]').type("Acre");
    cy.wait("@mainpage");
    cy.get("#button-search-bar:first").click();
    cy.url().should("be.equal", "http://localhost:3000/state/1/cities");
  });

  it("should be redirect to sign-in page if clicks in login", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-nav-options").click();
    cy.wait("@mainpage");
    cy.get("#button-login").click();
    cy.url().should("be.equal", "http://localhost:3000/sign-in");
  });
});
