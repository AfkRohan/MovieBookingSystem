import React from 'react'
import {Form, Col,Row,Modal} from 'antd'
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { HideLoading } from "../../redux/loadersSlice"; 
import {ShowLoading} from "../../redux/loadersSlice";
import { message } from 'antd';
import axios from 'axios';
import  {useState, useEffect } from 'react';
import AdminHeader from '../../components/AdminHeader';

function ShowForm({
    showShowsFormModal,
    setShowShowsFormModal,
    selectedShow,
    setSelectedShow,
    formType,
    

}) {
    const [movies, setMovies] = useState([]);
    const loadMovies = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/movie'); 
          setMovies(response.data);
        } catch (error) {
          console.error('Error loading movies:', error);
        }
      };
    
    const dispatch = useDispatch();
    const onFinish =async(values) => {
        console.log(values)
        try {
            dispatch(ShowLoading())

            let response =  null;
            if (formType === "add"){
                response =  await axios.post("http://localhost:4000/api/addshow", values) ?? null;
            }else{

            }
            if(response!=null){
                message.success("Show Added")
                setShowShowsFormModal(false);
                window.location.reload(false);
            }
            else{
                message.error("Failed to add show \n "+ response);
            }
            dispatch(HideLoading());
        } catch(error){
            dispatch(HideLoading())
            message.error(error.message)
        }
    };

    useEffect(() => {
        loadMovies();
      }, []);

  return (
    
   <Modal
   title={formType === "add"}
    open={showShowsFormModal}
    onCancel={() => setShowShowsFormModal(false)}
    footer={null}
    width={800}
  >
  
   <Form
   layout="vertical"
   onFinish={onFinish}
   >
    <Row
    gutter={16}>
        <Col span={24}>
            <Form.Item label="Show Date" name="showDate">
               <input type="date"/>
            </Form.Item>
        </Col>
        <Col span={24}>
            <Form.Item label="Show Time" name="showTime">
               <textarea type="text"/>
            </Form.Item>
        </Col>

        <Col span={8}>
            <Form.Item label="Movie" name="movieId">
             <select>
             {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.name}
                </option>
              ))}
            </select>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Price" name="price">
               <input type="number"/>
            </Form.Item>
            </Col>

    </Row>
    <div className="flex justify-end gap1">
        <Button title="Cancel" variant="outlined" type="button"
        onClick={()=> setShowShowsFormModal(false)} />
        <Button title="Save" type="submit"/>
    </div>
    </Form>
   
   </Modal>
  )
}

export default ShowForm;