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
        btn_createUser:'button[type="submit"]',
        txt_searchUsername:'#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input',
        btn_search:'button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]',
        icon_edit:'i[class="oxd-icon bi-pencil-fill"]'

    }
}

module.exports = new createUser();