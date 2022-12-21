
function validacionesForms(name,value){


  console.log(name);
  console.log(value);

  switch (name) {
    case "name":
        console.log("Entro a name");
        if (value.trim() === "") { return {name:"El campo nombre esta vacio"} }
        if (!(/^[a-zA-Z]+$/.test(value))) { return {name:"El Dato ingresado no es un nombre valido"} }
        if (value.length > 120) {return {name: "El nombre excede la cantidad de caracteres permitidos"}}
        else{return {name:null}}
    case "email":
        console.log("Entro a email")
        if (value.trim() === "") { return {email:"El campo email esta vacio"} }
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))) { return {email:"El email ingresado no es valido"} }
        if (value.length > 60) {return {email: "El email excede la cantidad de caracteres permitidos"}}
        else{return {email:null}}
    case "nationality":
        console.log("Entro a nationality")
        if (value === "Selecciona una opción") { return {nationality:"Necesita elegir una opción"} }
        else{return {nationality:null}}
    case "birthday":
        console.log("Entro a birthday")
        if (value === "") { return {birthday:"El campo fecha de nacimiento esta vacio"} }
        if (!(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(value))) { return {birthday:"La fecha ingresada no es valida"} }
        if (new Date(value) >= new Date()) {return {birthday: "La fecha ingresada es futura"}}
        let mayor = new Date() - (18 * 365 * 24 * 60 * 60 * 1000);
        let menor = new Date() - (120 * 365 * 24 * 60 * 60 * 1000);
        if ((new Date(value)) >= mayor) {return {birthday: "No puedes ser menor de edad para este tramite"}}
        if ((new Date(value)) < menor) {return {birthday: "La fecha indica que tienes 120 años o mas"}}
        else{return {birthday:null}}
    case "phone":
        console.log("Entro a phone")
        // let num = value.replace(/\D/g, '');
        // console.log(num)
        if (value === "") { return {phone:"El campo telefono esta vacio"} }
        if (!(/^\d{2,3}\s\d{3}\s\d{4}$/.test(value)) ) { return {phone:"El Telefono ingresado no es valido"} }
        if (value.length > 12) {return {phone: "El telefono excede la cantidad de caracteres permitidos"}}
        else{return {phone:null}}
    case "address":
        console.log("Entro a address")
        if (value.trim() === "") { return {address:"El campo Direccion esta vacio"} }
        if (value.length > 80) {return {address: "El campo direccion excede la cantidad de caracteres permitidos"}}
        else{return {address:null}}
    case "identification":
        console.log("Entro a identification")
        if (value.trim() === "") { return {identification:"El campo identificacion esta vacio"} }
        if (!(/^[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{10}$/.test(value))) { return {identification:"El folio de la INE no es valido"} }
        else{return {identification:null}}
  
    default:
        break;
  }


}

export default validacionesForms;