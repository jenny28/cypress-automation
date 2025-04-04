/// <reference types="Cypress" />
import login from "./selectores/login"
import createUser from "./selectores/createUser"

beforeEach('Conexión al app Orange', () =>{
  var midata
  cy.visit('/login')
  cy.fixture('./user-login')
  .then (test =>{
       midata=test
  })

})

describe('Modificación usuario', () => {
  it('Verificar modificación de estado', () => {
       cy.escribir(login.login.username,'Admin')
       cy.escribir(login.login.password,'admin123')
       cy.miclick(login.login.btn_login)
       //cy.miclick(createUser.create.sel_menu_admin)
       cy.get(createUser.create.menu_admin).click()
       //cy.miclick(createUser.create.btn_addUser)
  })

})