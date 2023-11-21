function validateForm() {
    const name = document.forms['userForm']['name'].value;
    const email = document.forms['userForm']['email'].value;
    const select = document.forms['userForm']['select'].value;
    

    if (name == ''|| email == '' || select =='') {
        alert('The form is empty');
    } 
    return false;
}
