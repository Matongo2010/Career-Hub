function details(name, email, ID, specialisation, certNumber, institution) {
this.name = name;
this.email = email;
this.ID = ID;
this.specialisation = specialisation;
this.certNumber = certNumber;
this.institution = institution;


}



function validateForm(){
    if(form.inputfield.value=="") {
        alert("Error: the field is blank!!")
    }
}