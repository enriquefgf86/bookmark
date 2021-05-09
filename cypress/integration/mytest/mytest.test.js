/// <reference types="cypress" />
//En este capreta se correrian todos los tests de la aplicacion , y
//todos se wrapean  en un probador principal , el cual contendria los demas
//test(tes1,test2 etcc)
describe("Basic Book mark Test", () => {
  it("visiting website", () => {
    cy.visit("http://localhost:4200/tabs/tab1");
    cy.contains("Bookmarks").should("exist");
  });
  it("charging modal create", () => {
    cy.get("[data-testBtn").click().should("not.have.text");
    cy.contains("Create Bookmark").should("exist");
    cy.contains("Insert Title").should("exist");
    cy.then(() => {});
  });

  it("writting and creating  in  modal create", () => {
    cy.debug()
    cy.get("[data-testTitle]").type("something");
    cy.get("[data-testUrl]").type("https://something.com");
    cy.get("[data-testSelect]").click();
    cy.get("[data-testOption]").contains("Leisure").click();
    cy.get("[data-testBtn2]").click();
  });

  it("going to book mark created", () => {
    cy.get("[data-testGoTo]").click();
    cy.url().should("include", "http://localhost:4200/tabs/tab2/");
  });

  it("in bookmark created", () => {
    cy.url().should("include", "http://localhost:4200/tabs/tab2/");
    cy.get("[data-testGoToWeb]").should("exist");
    cy.get("[data-testDelete]").should("exist");
    cy.get("[data-testGoHome]").should("exist");
    cy.get("[data-testDelete]").should("exist").click();
    cy.get("[data-testGoHome]").should("exist").click();
    cy.url().should("include", "http://localhost:4200/tabs/tab1");
  });

  it("charging modal create again", () => {
    cy.get("[data-testBtn").click().should("not.have.text");
    cy.contains("Create Bookmark").should("exist");
    cy.contains("Insert Title").should("exist");
  });
  it("writting and creating  in  modal create again", () => {
    cy.get("[data-testTitle]").type("something");
    cy.get("[data-testUrl]").type("https://something.com");
    cy.get("[data-testSelect]").click();
    cy.get("[data-testOption]").contains("Leisure").click();
    cy.get("[data-testBtn2]").click();
  });

  it("editing modal with same values", () => {
    cy.get("[data-testEdit]").should("exist").click();
    cy.contains("Edit Bookmark").should("exist");
    cy.get("[data-testBtnEdit]").should("exist").click();
  });

  it("editing modal with other values", () => {
    cy.get("[data-testEdit]").should("exist").click();
    cy.contains("Edit Bookmark").should("exist");
    cy.get("[data-testEditTitle]").type("something");
    cy.get("[data-testEditLink").type("https://stackoverflow.com");
    cy.get("[data-testBtnEdit]").should("exist").click();
  });

  it("delte bookmark", () => {
    cy.get("[data-testBtnDelete]").should("exist").click();
  });
});
