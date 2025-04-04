class createUser{

    create = {
         menu_admin:'//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span',
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