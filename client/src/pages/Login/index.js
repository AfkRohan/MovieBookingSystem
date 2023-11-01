import React from 'react'
import{Form, Input} from "antd";
import { Link } from 'react-router-dom';
import Header from '../../components/AdminHeader';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ShowLoading } from '../../redux/loadersSlice';
import { HideLoading } from '../../redux/loadersSlice';

function Login(){
    const dispatch = useDispatch();
    dispatch(ShowLoading())
    async function onFinish(values){
        axios.post('http://localhost:4000/api/login', {
               email: values.email,
               Password: values.password,
            })
            dispatch(HideLoading())
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
                dispatch(HideLoading())
               console.log(err.message);
            });
    }
    return(
        
        <div>
            
            <Header>
            
            </Header>
        <div className="flex justify-center hscreen item-center bg-primary"
        style={{backgroundImage:'url("https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNpbmVtYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <h3>LOGIN</h3>
            <Form layout="vertical" onFinish={onFinish}
            className="mt2">
                

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
                <br/>
                <br/>
                <Link to="/">Forgot Password?</Link><br/>
                <Link to="/register">Need To Create New Account? Click Here</Link>
                
            </Form>
           </div>
        </div>
        
        </div>
       
    )
}

export default Login