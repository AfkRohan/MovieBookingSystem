import React from 'react'
import{Form, Input} from "antd";
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import axios from 'axios';

function AdminLogin(){
    async function onFinish(values){
        axios.post('http://localhost:4000/api/admin-login', {
               email: values.email,
               Password: values.password,
            })
            .then((response) =>{ 
                console.log(response)
                if(response.data==="Admin Verified Successfully"){
                    window.location.href="/admin-dashboard"
                }
                else{
                    alert(response.data)
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
                label="Email"
                name="email"
                rules={[{required:true,type:'text', message: "Please enter valid email"}]}
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
       
    )
}

export default AdminLogin