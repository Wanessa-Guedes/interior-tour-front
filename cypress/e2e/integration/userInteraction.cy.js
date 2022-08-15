/// <reference types="cypress" />

describe("user interactions e2e tests", () => {
  it("should be able to like/dislike a city after logged", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-like:first").click();
    cy.wait("@mainpage");
    cy.url().should("not.be.equal", "http://localhost:3000/sign-in");
  });

  it("should be able to favorite/unfavorite a city after logged", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-favorite:first").click();
    cy.wait("@mainpage");
    cy.url().should("not.be.equal", "http://localhost:3000/sign-in");
  });

  it("should be able to visited/unvisited a city after logged", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-visited:first").click();
    cy.wait("@mainpage");
    cy.url().should("not.be.equal", "http://localhost:3000/sign-in");
  });

  it("should be able to go to profile page after logged", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-nav-options").click();
    cy.wait("@mainpage");
    cy.get("#button-profile").click();
    cy.url().should("be.equal", "http://localhost:3000/profile");
  });

  it("should be able to go to favorites page after logged", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-nav-options").click();
    cy.wait("@mainpage");
    cy.get("#button-favorite-page").click();
    cy.url().should("be.equal", "http://localhost:3000/favorites");
  });

  it("should be able to go to favorites page after logged", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[placeholder="E-mail"]').type("wanessa@gmail.com");
    cy.get('input[placeholder="Password"]').type("wanessa");
    cy.get("#button-submit").click();
    cy.intercept("GET", "http://localhost:5000/main").as("mainpage");
    cy.get("#button-nav-options").click();
    cy.wait("@mainpage");
    cy.get("#button-logout").click();
    cy.url().should("be.equal", "http://localhost:3000/");
    cy.get("#button-nav-options").should("have.length", 1);
  });
});
