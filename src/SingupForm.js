import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import {Link} from 'react-router-dom';


class SingupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            email:'',
            password: '',
            password2:'',
            name: '',
            lastname:'',
            buttonDisabled: false
        }
    }

    setInputValue(property,val){
        val = val.trim();
        if(val.length > 25){
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm(){
        this.setState({
            phone: '',
            email:'',
            password: '',
            password2:'',
            name: '',
            lastname:'',
            buttonDisabled: false
        })
    }
    resetPassword(){
        this.setState({
            password: '',
            password2:'',
            buttonDisabled: false
        })
    }
    async doLogin(){
        console. log(this.state.password2);
        if(!this.state.phone){return;} 
        if(!this.state.email){return;}
        if(!this.state.password){return;} 
        if(!this.state.password2){return;} 
        if(!this.state.name){return;}
        if(!this.state.lastname){return;}
        if (this.state.password != this.state.password2){
            console.log("No coninsiden las contraseñas");
            this.resetPassword();
            return;}

        this.setState({
            buttonDisabled:true
        })

        try{
            let res = await fetch('/singup',{
                method:'post',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    phone: this.state.phone,
                    email: this.state.email,
                    password: this.state.password,
                    password2: this.state.password2,
                    name: this.state.name,
                    lastname: this.state.lastname
                }) 
            })
            let result = await res.json();
        }
        catch(e){
            console.log(e);
            this.resetForm();
        }
    }

    render(){
        
        return (
            <div className="singupForm">
                <h2> VEA Login</h2>
                <InputField
                    type = 'number'
                    placeholder = 'Phone'
                    value = {this.state.phone ? this.state.phone :''}
                    onChange = {(val) => this.setInputValue('phone',val)}
                />
                <InputField
                    type = 'email'
                    placeholder = 'email'
                    value = {this.state.email? this.state.email :''}
                    onChange = {(val) => this.setInputValue('email',val)}
                />
                <InputField
                    type = 'password'
                    placeholder = 'password'
                    value = {this.state.password? this.state.password :''}
                    onChange = {(val) => this.setInputValue('password',val)}
                />
                <InputField
                    type = 'password'
                    placeholder = 'Confirm password'
                    value = {this.state.password2? this.state.password2 :''}
                    onChange = {(val) => this.setInputValue('password2',val)}
                />
                <InputField
                    type = 'text'
                    placeholder = 'Name'
                    value = {this.state.name? this.state.name :''}
                    onChange = {(val) => this.setInputValue('name',val)}
                />
                <InputField
                    type = 'text'
                    placeholder = 'Last name'
                    value = {this.state.lastname? this.state.lastname :''}
                    onChange = {(val) => this.setInputValue('lastname',val)}
                />

                <SubmitButton
                    text = 'Register'
                    disabled = {this.state.buttonDisabled}
                    onClick = {() => this.doLogin()}
                />

                <Link to="/">
                    <li>Aun no tienes cuenta? registrate</li>
                </Link>
                
            </div> 
        );
    } 
}//close App class

export default SingupForm;