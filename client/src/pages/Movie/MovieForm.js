import React from 'react'
import {Form, Col,Row,Modal} from 'antd'
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { HideLoading } from "../../redux/loadersSlice"; 
import {ShowLoading} from "../../redux/loadersSlice";
import { message } from 'antd';
import { AddMovie } from '../../apicalls/Adminmovies';



function MovieForm({
    showMovieFormModal,
    setShowMovieFormModal,
    selectedMovie,
    setSelectedMovie,
    formType,

}) {
    const dispatch = useDispatch();
    const onFinish =async(values) => {
        try {
            dispatch(ShowLoading())

            let response = null;
            if (formType === "add"){
                response = await AddMovie(values)
            }else{

            }
            if(response.success){
                message.success(response.message)
                setShowMovieFormModal(false);
            }
            else{
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch(error){
            dispatch(HideLoading())
            message.error(error.message)

        }
    };

  return (
   <Modal
   title={formType === "add"? "Add Movie":"Edit Movie"}
    open={showMovieFormModal}
    onCancel={() => setShowMovieFormModal(false)}
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
            <Form.Item label="Movie Name" name="name">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={24}>
            <Form.Item label="Movie Description" name="description">
               <textarea type="text"/>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Language" name="languages">
             <select name="" id="">
                <option value="">Select Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
            </select>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Genre" name="genre">
            <select name="" id="">
                <option value="">Select Genre</option>
                <option value="Adventure">Adventure</option>
                <option value="Horror">Horror</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
            </select>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Rating" name="rating">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={16}>
            <Form.Item label="Poster URL" name="poster">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={16}>
            <Form.Item label="Trailer URL" name="trailerLink">
               <input type="text"/>
            </Form.Item>
        </Col>
        

    </Row>
    <div className="flex justify-end">
        <Button title="Cancel" variant="outlined" type="button"
        onClick={()=> setShowMovieFormModal(false)} />
        <Button title="Save" type="submit"/>
    </div>
    </Form>
   
   </Modal>
  )
}

export default MovieForm