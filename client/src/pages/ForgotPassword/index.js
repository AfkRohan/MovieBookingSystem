import React from 'react'
import{Form, Input} from "antd";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import logo from '../../assets/logo1.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ShowLoading } from '../../redux/loadersSlice';
import { HideLoading } from '../../redux/loadersSlice';
import Cookies from 'js-cookie';

function ForgotPassword(){
    const dispatch = useDispatch();
    dispatch(ShowLoading())
    async function onFinish(values){
        if(values.password == values.confirmpassword){
        axios.post('https://movie-booking-system-sable.vercel.app/api/fgtpwd', {
               email: values.email,
               Password: values.password,
            })
            .then((response) =>{ 
                const data = response.data
                if(data!="Invalid Password"){
                    console.log(data);
                    Cookies.set('username',data.FirstName,{expires:7});
                    Cookies.set('userId',data._id,{expires:7});
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
        else{
            alert("Password And Confirm Password must match");
        }
    }
    return(
        
        <div>
            
            <Header>
            </Header>
        <div className="flex justify-center hscreen item-center bg-primary"
        style={{backgroundImage:'url("https://img.wallpapersafari.com/tablet/768/1024/84/64/sfvXo0.jpg")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}> 
           <div className="card p3 w400">
           <img src={logo} alt="Cinemax Logo" className="mb-4" />
            <hr />
            <h3>Forgot Password</h3>
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

                <Button type="primary" htmlType="submit" title="Login" />
                <br/>
                <br/>
                <Link to="/login">Login</Link><br/>
                <Link to="/register">Need To Create New Account? Click Here</Link>
                
            </Form>
           </div>
        </div>
        
        </div>
       
    )
}

export default ForgotPassword