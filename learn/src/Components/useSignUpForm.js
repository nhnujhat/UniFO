import { useState, useEffect} from "react";
import validateInfoSignUp from "./validateInfoSignUp";
import  Axios from "axios";
import Home from './pages/Home';

const useSignUpForm = validateInfoSignUp =>{
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        usertype:''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    function redirect()
{
    window.location.href="/";
}

    const register = () =>{
        Axios.post('http://localhost:3001/',{
            username: values.username,
            usertype: values.usertype,
             password: values.password,
              email: values.email}).then((response)=>{
                  console.log(response);
              })   
      };


    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfoSignUp(values));
        setIsSubmitted(true);
        if(Object.keys(errors).length===0 && isSubmitted)
        {
            register();
            redirect(); 
        }
       
    }


    return { handleChange, values, handleSubmit, errors};

};

export default useSignUpForm;