import React from 'react'
import{Form, Input} from "antd";
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import axios from 'axios';
import Cookies from 'js-cookie';

function AdminLogin(){
    async function onFinish(values){
        axios.post('https://movie-booking-system-sable.vercel.app/api/admin-login', {
               email: values.email,
               Password: values.password,
            })
            .then((response) =>{ 
                console.log(response)
                if(response.status == 200){
                   Cookies.set('admin','Admin')
                    window.location.href="/admin-dashboard"
                }
            })
            .catch((err) => {
                alert("Invalid credentials")
               console.log(err.message);
            });
    }
    return(
        <>
        <div className="flex justify-center hscreen item-center bg-primary "
        style={{backgroundImage:'url("https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNpbmVtYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                </svg>
            </h3>
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
                <br/>
                <Button  type="primary" htmlType="submit" title="Login" />
                
            </Form>
           </div>
        </div>
       </>
    )
}

export default AdminLogin