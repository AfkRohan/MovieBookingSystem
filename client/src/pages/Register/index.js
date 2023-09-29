import React from 'react';
import{Form, Input} from "antd";
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Register(){
    function onFinish(values){
        if(values.password == values.confirmpassword){
        axios.post('http://localhost:4000/api/create', {
            email: values.email,
            Password: values.password,
            firstName : values.fName,
            lastName : values.lName,
            phone : values.phone,
            Date : values.dob
         })
         .then((response) =>{ 
             const data = response.data
             if(data){
                 console.log(data);
             window.location.href = "/";
             }
         })
         .catch((err) => {
            console.log(err.message);
         });
        }
        else{
            alert("Password and confirm password do not match")
        }
    }
    return(
        <div className="flex justify-center hscreen item-center bg-primary"
        style={{backgroundImage:'url("https://cdn.wallpapersafari.com/46/81/215NeC.jpg")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <Form layout="vertical"
            onFinish={onFinish}
            className="mt2">
                <Form.Item
                label="First Name"
                name="fName"
                rules={[{required:true, message: "Please enter valid value"}]}
                >
               <Input />
                </Form.Item>

                <Form.Item
                label="Last Name"
                name="lName"
                rules={[{required:true, message: "Please enter valid value"}]}
                >
               <Input />
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                rules={[{required:true, message: "Please enter valid email"}]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Phone"
                name="phone"
                rules={[{required:true, message: "Please enter your phone number"}]}
                >
                <PhoneInput />
                </Form.Item>

                <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[{required:true,type:Date, message: "Please enter your date of birth"}]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{required:true, message: "Please enter your password"}]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                rules={[{required:true, message: "Please re-enter your password"}]}
                >
                <Input.Password/>
                </Form.Item>

                <Button type="primary" htmlType="submit" title="REGISTER" />
            </Form>
           </div>
        </div>
       
    )
}

export default Register