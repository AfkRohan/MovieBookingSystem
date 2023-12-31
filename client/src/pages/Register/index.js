import React from 'react';
import{DatePicker, Form, Input} from "antd";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Register(){
    function onFinish(values){
        if(values.password === values.confirmpassword){
        axios.post('https://movie-booking-system-sable.vercel.app/api/create', {
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
        <>
        
        <div>
        <Header/>
        <div className="flex justify-center  item-center bg-primary"
        style={{backgroundImage:'url("https://iotweek.org/wp-content/uploads/2018/10/IOTWeek_PP-hero_Full-HD_1920x1080-Blank-Background.jpg")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <h3>REGISTERATION</h3>
            <Form layout="vertical"
            onFinish={onFinish}
            className="mt2">
                <Form.Item
                label="First Name"
                name="fName"
                rules={[
                {
                required:true, 
                message: "Please enter valid value"
                }, 
                {
                    pattern: /[a-zA-Z]+$/,
                    message: "Invalid name"
                }
                ]}
                >
               <Input />
                </Form.Item>

                <Form.Item
                label="Last Name"
                name="lName"
                rules={
                    [{
                    required:true, 
                    message: "Please enter valid value"
                    },
                    {
                    pattern: /[a-zA-Z]+$/,
                    message: "Invalid name"
                    }]}
                >
               <Input />
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                rules={[{required:true, type:'email', message: "Please enter valid email"}]}
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
                <DatePicker />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required:true, 
                    message: "Please enter your password"
                    },
                    {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message: "Password must have atleast one small case alphabet,one number,one symbol and one small case alphabet "
                    }
                ]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                rules={[
                    {
                        required:true,
                        message: "Please Re-enter your password"
                    },
                    {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                        message: "Password must have atleast one small case alphabet,one number,one symbol and one small case alphabet "
                    }
                ]}
                >
                <Input.Password/>
                </Form.Item>

                <Button type="primary" htmlType="submit" title="REGISTER" />
            </Form>
           </div>
        </div>
    </div>
    <Footer />
    </>
       
    )
}

export default Register