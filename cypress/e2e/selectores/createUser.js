class createUser{

    create = {
         menu_admin:':nth-child(1) > .oxd-main-menu-item',
        btn_addUser:'button[class="oxd-button oxd-button--medium oxd-button--secondary"]',
        dropdown_UserRole:'',
        txt_employeeName:'',
        dropdown_status:'',
        txt_username:'',
        txt_pwd:'',
        txt_confirmpwd:''
    }
}

module.exports = new createUser();