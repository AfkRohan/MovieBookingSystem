import React from 'react';
import { Form, Col, Row, Modal } from 'antd';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { HideLoading } from '../../redux/loadersSlice';
import { ShowLoading } from '../../redux/loadersSlice';
import { message } from 'antd';
import axios from 'axios';

function EditMovieForm({
  showMovieFormModal,
  setShowMovieFormModal,
  selectedMovie,
  formType, 
}) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(ShowLoading());

      let response = null;
      if(formType === 'edit') {
        // Edit the selected movie
        response = await axios.put(`http://localhost:4000/api/movie/${selectedMovie._id}`, values) ?? null;
      }

      if (response !== null) {
        message.success('Movie Edited');
        setShowMovieFormModal(false);
        window.location.reload(false);
      } else {
        message.error(`Failed to edit movie \n ${response}`);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <Modal
      title={formType === 'edit' }
      visible={showMovieFormModal}
      onCancel={() => setShowMovieFormModal(false)}
      footer={null}
      width={800}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedMovie}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Movie Name" name="name">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Movie Description" name="description">
              <textarea type="text" />
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
                <option value="Gujarati">Gujarati</option>
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
            <Form.Item label="Age Groups" name="ageGroups">
              <select name="" id="">
                <option value="">Select Age Group</option>
                <option value="Kids">Kids</option>
                <option value="Teenage">Teenage</option>
                <option value="Adult">Adult</option>
                <option value="Family">Family</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Rating" name="rating">
              <input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Duration" name="duration">
               <input type="number" min={50} max={180}/>
            </Form.Item>
        </Col>
          <Col span={16}>
            <Form.Item label="Poster URL" name="image">
              <input type="url" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item label="Trailer URL" name="trailerLink">
              <input type="url" />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end gap1">
          <Button
            title="Cancel"
            variant="outlined"
            type="button"
            onClick={() => setShowMovieFormModal(false)}/>
          <Button title="Save" type="submit" />
        </div>
      </Form>
    </Modal>
  );
}

export default EditMovieForm;
