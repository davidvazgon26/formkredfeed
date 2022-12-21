import { useState } from "react";
import validacionesForms from "../ValidacionesForms/validacionesForms.js"

import style from './FormLegal.module.css';

function FormLegal(){
    
    const [errors, setErrors] = useState({
      // email: '',
      // name: '',
      // nationality: '',
      // birthday: '',
      // phone: '',
      // address: '',
      // identification: ''
    });
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        nationality: '',
        birthday: '',
        phone: '',
        address: '',
        identification: ''
      });

      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

      const handleBlur = (event) =>{
        const { name, value } = event.target;
        let result = validacionesForms(name, value);
        // console.log(Object.keys(result)[0])
        let n = Object.keys(result)[0]
        let v = result[n]
        console.log(n)
        console.log(result[n])
        setErrors({ ...errors, [n]:v});

        // if(result.name !== undefined){
          //     console.log(Object.keys(result)[0]+"+"+result.name)
          //     newErrors[Object.keys(result)[0]] = result.name
          // }
          // let obj = {email:"dfghjk"}
          // console.log(newErrors)
          // setErrors(name);
          // setErrors("obj");
          // console.log(errors);
          
          // return Object.keys(newErrors).length === 0;
          // console.log("Blur es: "+ e.target.name);
          // console.log("Blur es: "+ e.target.value);
          // handleChange(e);
          // setErrors();
        }
        
        console.log(errors)
        console.log(errors.name)
    //   const validateForm = () => {
    //     const newErrors = {};
    //     if (!formData.name) {
    //       newErrors.name = 'El nombre es requerido';
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    //   }

      function submitData(e){
        e.preventDefault();
        console.log(formData)
        alert("Datos enviados exitosamente")

      }
      
      // Aqui Termina la logica y comienza el renderizado
    return(
        <>
        <h2 className={style.title}>Datos del Representante Legal</h2>
            <form onSubmit={(e)=>submitData(e)}>
            
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
            {errors.name && <p className="error-message">{errors.name}</p>}
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
             {errors.email && <p className="error-message">{errors.email}</p>}
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
            {errors.nationality && <p className="error-message">{errors.nationality}</p>}
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
             {errors.birthday && <p className="error-message">{errors.birthday}</p>}
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
             {errors.phone && <p className="error-message">{errors.phone}</p>}
            <br/>
            

            <label htmlFor="address">Domicilio:</label><br/>
            <input 
            type="text" 
            id="address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu direccion aqui"     
            /><br/>
             {errors.address && <p className="error-message">{errors.address}</p>}
            <br/>

            <label htmlFor="identification">Identificación:</label><br/>
            <input 
            type="text" 
            id="identification" 
            name="identification"
            value={formData.identification}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ejemplo: INE / folio 014567" 
            /><br/>
              {errors.identification && <p className="error-message">{errors.identification}</p>}
            <br/>
            <br/>

            <input type="submit" value="Enviar"/>
            </form>
            </>);
}


export default FormLegal;