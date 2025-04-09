class createUser{

    create = {
        menu_admin:':nth-child(1) > .oxd-main-menu-item',
        btn_addUser:'button[class="oxd-button oxd-button--medium oxd-button--secondary"]',
        dropdown_UserRole:':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
        clic_UserRole:'.oxd-select-dropdown > :nth-child(2) > span',
        txt_employeeName:'div[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]',
        clic_employeeName:'.oxd-autocomplete-option > span',
        dropdown_status:':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
        clic_status:'.oxd-select-dropdown > :nth-child(2) > span',
        txt_username:':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input',
        txt_pwd:'.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input',
        txt_confirmpwd:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        btn_createUser:'button[type="submit"]'
    }
}

module.exports = new createUser();