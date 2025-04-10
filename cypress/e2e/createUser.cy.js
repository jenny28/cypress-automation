/// <reference types="Cypress" />
import login from "./selectores/login"
import createUser from "./selectores/createUser"

describe('Modificación usuario', () => {
  var midata
  beforeEach('Conexión al app Orange', () =>{
    cy.visit('/login')
    cy.fixture('./user')
    .then (test =>{
       midata=test
     })
  
  })
  it('Verificar modificación de estado', () => {
    cy.escribir(login.login.username,'Admin')
    // write password
    cy.escribir(login.login.password,'admin123')
    // click login
    cy.miclick(login.login.btn_login)
    // click menu: Admin
    cy.miclick(createUser.create.menu_admin)

    midata.forEach((data) =>{
       // Click button Add
       cy.miclick(createUser.create.btn_addUser)
       // select user role
       cy.escribir(createUser.create.dropdown_UserRole,data.userole)
       cy.miclick(createUser.create.clic_UserRole)
       // Write Employee Name
       cy.escribir(createUser.create.txt_employeeName,data.employeeName)
       cy.miclick(createUser.create.clic_employeeName)
       // select status : enabled
       cy.escribir(createUser.create.dropdown_status,data.status)
       cy.miclick(createUser.create.clic_status)
       // write username
       cy.escribir(createUser.create.txt_username,data.username)
       // write password
       cy.escribir(createUser.create.txt_pwd,data.password)
       // confirm password
       cy.escribir(createUser.create.txt_confirmpwd,data.password)
       cy.miclick(createUser.create.btn_createUser)
      // Aserción
       cy.get('.oxd-toast').contains('Success')
       cy.wait(4000)
       //cy.get(':nth-child(2) > .oxd-input').eq(0).type(data.username)
       cy.escribir(createUser.create.txt_searchUsername,data.username)
       cy.miclick(createUser.create.btn_search)
       // Aserción : que solo se muestre en la búsqueda un solo resultado
       cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text','(1) Record Found')
       // Aserción : que se muestre en el listado el usuario creado
       cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('have.text',data.username)
      })
  })
})