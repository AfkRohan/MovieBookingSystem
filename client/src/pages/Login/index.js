import React from 'react'
import{Form} from "antd";
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';

function Login(){
    return(
        <div className="flex justify-center hscreen item-center bg-primary"
        style={{backgroundImage:'url("https://cdn.wallpapersafari.com/46/81/215NeC.jpg")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <Form layout="vertical"
            className="mt2">
                <Form.Item
                label="Name"
                name="name"
                rules={[{required:true, message: "Please enter valid value"}]}
                >
                <input type="text"/>
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                rules={[{required:true, message: "Please enter valid email"}]}
                >
                <input type="email"/>
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{required:true, message: "Please enter your password"}]}
                >
                <input type="password"/>
                </Form.Item>

                <Button type="primary" htmlType="submit" title="REGISTER" />
            </Form>
           </div>
        </div>
       
    )
}

export default Login