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
       //cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type(data.userole)
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
      })
  })
})