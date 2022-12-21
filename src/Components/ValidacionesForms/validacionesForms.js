
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
        break
    case "phone":
        console.log("Entro a phone")
        break
    case "address":
        console.log("Entro a address")
        break
    case "identification":
        console.log("Entro a identification")
        break
  
    default:
        break;
  }


}

export default validacionesForms;