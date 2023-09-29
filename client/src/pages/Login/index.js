import React from 'react'
import{Form, Input} from "antd";
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import { redirect } from 'react-router-dom';
import axios from 'axios';

function Login(){
    async function onFinish(values){
        axios.post('http://localhost:4000/api/login', {
               email: values.email,
               Password: values.password,
            })
            .then((response) =>{ 
                const data = response.data
                if(data){
                    console.log(data);
                }
                else{
                    redirect("/");
                }
            })
            .catch((err) => {
               console.log(err.message);
            });
    }
    return(
        <div className="flex justify-center hscreen item-center bg-primary"
        style={{backgroundImage:'url("https://cdn.wallpapersafari.com/46/81/215NeC.jpg")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <Form layout="vertical" onFinish={onFinish}
            className="mt2">
                <Form.Item
                label="Name"
                name="name"
                rules={[{required:true, message: "Please enter valid value"}]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                rules={[{required:true,type:'email', message: "Please enter valid email"}]}
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

                <Button type="primary" htmlType="submit" title="REGISTER" />
            </Form>
           </div>
        </div>
       
    )
}

export default Login