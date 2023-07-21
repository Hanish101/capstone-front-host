import { useState } from "react";
import Login from "../entry/Login";
import Register from "../entry/Register";
const FormComponentMap = new Map();

// const Login = ()=>{
//     return<>
//     <h1> Login Form </h1> 
//     <hr />
//     </>
// }

const SignUp = ()=>{
    return <h1> SignUp Form </h1>
}

FormComponentMap.set('login',<Login/>);
FormComponentMap.set('register',<Register/>)


const UserForm = ()=>{

    const [formType, setFormType] = useState('register');
    const changeForm = ()=>{
        setFormType(formType==="register"?'login':"register");
    }

    return <div>
        {FormComponentMap.get(formType)}
        
        <button onClick={changeForm}>Change form </button>
    </div>

}

export default UserForm