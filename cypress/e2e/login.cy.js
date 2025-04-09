/// <reference types="Cypress" />
import login from "./selectores/login"
import createUser from "./selectores/createUser"

describe('Modificación usuario', () => {
  var midata
  beforeEach('Conexión al app Orange', () =>{
    cy.visit('/login')
  })

  it('Verificar modificación de estado', () => {
    cy.escribir(login.login.username,'Admin')
    // write password
    cy.escribir(login.login.password,'admin123')
    // click login
    cy.miclick(login.login.btn_login)
    // click menu: Admin
    cy.get(createUser.create.menu_admin).should('have.text','Admin')
  })
})