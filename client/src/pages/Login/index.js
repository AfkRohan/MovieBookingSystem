import React from 'react'
import{Form, Input} from "antd";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
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
                    window.location.href="http://localhost:3000/"
                }
                else{
                  alert("User Not Found");
                }
            })
            .catch((err) => {
               console.log(err.message);
            });
    }
    return(
        
        <div>
            
            <Header>
            
            </Header>
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

                <Button type="primary" htmlType="submit" title="Login" />
                
            </Form>
           </div>
        </div>
        
        <Footer>
            
        </Footer>
        </div>
       
    )
}

export default Login