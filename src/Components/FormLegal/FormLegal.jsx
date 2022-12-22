import { useState } from "react";
import validacionesForms from "../ValidacionesForms/validacionesForms.js"

import style from './FormLegal.module.css';

function FormLegal(){
    
    const [errors, setErrors] = useState({
      // Si necesitas que los mensajes de error esten activos desde el inicio solo descomenta estas lineas de abajo
        // name: 'El campo nombre esta vacio',
        // email: 'El campo email esta vacio',
        // nationality: "Necesitas seleccionar una opcion",
        // birthday: 'El campo fecha esta vacio',
        // phone: 'El campo telefono esta vacio',
        // address: 'El campo direccion esta vacio',
        // numberIn:'',
        // numberOut:'El campo numero exterior esta vacio',
        // CP:'El campo codigo postal esta vacio',
        // Col: 'El campo colonia esta vacio',
        // Mun:'El campo municipio esta vacio',
        // City:'El campo ciudad esta vacio',
        // State:'El campo Estado esta vacio',
        // Country:'El campo Pais esta vacio',
        // fileInput: 'El campo identificacion esta vacio'
    });
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        nationality: '',
        birthday: '',
        phone: '',
        address: '',
        numberIn:'NA',
        numberOut:'',
        CP:'',
        Col:'',
        Mun:'',
        City:'',
        State:'',
        Country:'',
        fileInput: ''
      });

      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

      const handleBlur = (event) =>{
        const { name, value } = event.target;
        let result = validacionesForms(name, value);
        console.log(result)
        console.log(Object.keys(result)[0])
        let n = Object.keys(result)[0]
        let v = result[n]
        // console.log(n)
        // console.log(result[n])
        setErrors({ ...errors, [n]:v});
        }
       
        // console.log(formData)
        // console.log(errors)
        
      function submitData(e){
        e.preventDefault();
        let propiedadesNoNulas = Object.values(errors).filter(valor => valor !== null );
        if(propiedadesNoNulas.length === 0 && Object.keys(errors).length !== 0) {
          // Aqui iria el metodo para enviar los datos al back (Axios, Fetch o Ajax)
          alert("Datos enviados exitosamente")
        }else{
                        
          alert("Favor de validar los datos en el formulario")
        }
      }
      
      // Aqui Termina la logica y comienza el renderizado
    return(
        <div className={style.container}>
        <h2 className={style.title}>Datos del Representante Legal</h2>
            <form className={style.form} onSubmit={(e)=>submitData(e)}>
            
            <label htmlFor="name">Nombre:</label><br/>
            <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ingresa tu nombre"
            /><br/>
            {errors.name && <p className={style.error_message}>{errors.name}</p>}
            <br/>

            <label htmlFor="email">Correo electrónico:</label><br/>
            <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="correo@dominio.com"    
            /><br/>
             {errors.email  && <p className={style.error_message}>{errors.email}</p>}
            <br/>

            <label htmlFor="nationality">Nacionalidad:</label><br/>
            <select 
            
            id="nationality" 
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Selecciona una opcion"    
            >
            <option value="Selecciona una opción" >Selecciona una opción</option>
            <option value="Mexicano">Mexicano</option>
            <option value="Americano">Americano</option>
            <option value="Otro">Otro</option>
            </select><br/>
            {errors.nationality && <p className={style.error_message}>{errors.nationality}</p>}
            <br/>

            <label htmlFor="birthday">Fecha de nacimiento:</label><br/>
            <input 
            type="date" 
            id="birthday" 
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="dd/mm/yyyy"      
            /><br/>
             {errors.birthday && <p className={style.error_message}>{errors.birthday}</p>}
            <br/>

            <label htmlFor="phone">Teléfono:</label><br/>
            <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: Lada(55) 123 4567" 
            /><br/>
             {errors.phone && <p className={style.error_message}>{errors.phone}</p>}
            <br/>
            

            <h2 className={style.subtitle} >Domicilio:</h2><br/>
            <label htmlFor="address">Calle o Avenida:</label><br/>
            <input 
            type="text" 
            id="address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu direccion aqui"     
            /><br/>
             {errors.address && <p className={style.error_message}>{errors.address}</p>}
            <br/>

            <label htmlFor="numberIn">Numero Interior:</label><br/>
            <input 
            type="text" 
            id="numberIn" 
            name="numberIn"
            value={formData.numberIn}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Numero Exterior"     
            /><br/>
             {errors.numberIn && <p className={style.error_message}>{errors.numberIn}</p>}
            <br/>

            <label htmlFor="numberOut">Numero Exterior:</label><br/>
            <input 
            type="text" 
            id="numberOut" 
            name="numberOut"
            value={formData.numberOut}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Numero Exterior"     
            /><br/>
             {errors.numberOut && <p className={style.error_message}>{errors.numberOut}</p>}
            <br/>

            <label htmlFor="CP">Codigo Postal:</label><br/>
            <input 
            type="text" 
            id="CP" 
            name="CP"
            value={formData.CP}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: 27000"     
            /><br/>
             {errors.CP && <p className={style.error_message}>{errors.CP}</p>}
            <br/>

            <label htmlFor="Col">Colonia | Barrio | Neigborhood:</label><br/>
            <input 
            type="text" 
            id="Col" 
            name="Col"
            value={formData.Col}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu colonia aqui"     
            /><br/>
             {errors.Col && <p className={style.error_message}>{errors.Col}</p>}
            <br/>

            <label htmlFor="Mun">Municipio | Alcaldia :</label><br/>
            <input 
            type="text" 
            id="Mun" 
            name="Mun"
            value={formData.Mun}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Municipio de..."     
            /><br/>
             {errors.Mun && <p className={style.error_message}>{errors.Mun}</p>}
            <br/>

            <label htmlFor="City">Ciudad | Localidad :</label><br/>
            <input 
            type="text" 
            id="City" 
            name="City"
            value={formData.City}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ciudad aqui"     
            /><br/>
             {errors.City && <p className={style.error_message}>{errors.City}</p>}
            <br/>

            <label htmlFor="State">Estado:</label><br/>
            <input 
            type="text" 
            id="State" 
            name="State"
            value={formData.State}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Estado"     
            /><br/>
             {errors.State && <p className={style.error_message}>{errors.State}</p>}
            <br/>

            <label htmlFor="Country">Pais:</label><br/>
            <input 
            type="text" 
            id="Country" 
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: Mexico, USA, etc."     
            /><br/>
             {errors.Country && <p className={style.error_message}>{errors.Country}</p>}
            <br/>

            <label htmlFor="fileInput">Documento de identificacion:</label><br/>
            <input 
            type="file" 
            id="fileInput" 
            name="fileInput"
            value={formData.fileInput}
            onChange={(e)=>{
              handleChange(e); 
              handleBlur(e);
              console.log(e.target.name)
              console.log(e.target.value)
              // validacionesForms(e.target.name, e.target.value)
              }
              }
            /><br/>
              {errors.fileInput && <p className={style.error_message}>{errors.fileInput}</p>}
            <br/>
            <br/>

            <input type="submit" value="Enviar"/>
            </form>
            </div>);
}


export default FormLegal;