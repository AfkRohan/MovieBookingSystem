import React from 'react';
import { Form, Col, Row, Modal } from 'antd';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { HideLoading } from '../../redux/loadersSlice';
import { ShowLoading } from '../../redux/loadersSlice';
import { message } from 'antd';
import axios from 'axios';

function EditShowForm({
  showShowsFormModal,
  setShowShowsFormModal,
  selectedShow,
  formType, 
  shows
}) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(ShowLoading());

      let response = null;
      if(formType === 'edit') {
        // Edit the selected shows
        response = await axios.put(`http://localhost:4000/api/show/${selectedShow._id}`, values) ?? null;
      }

      if (response !== null) {
        message.success('Show Edited');
        setShowShowsFormModal(false);
        window.location.reload(false);
      } else {
        message.error(`Failed to edit Show \n ${response}`);
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
      visible={showShowsFormModal}
      onCancel={() => setShowShowsFormModal(false)}
      footer={null}
      width={800}
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedShow}>
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
            <Form.Item label="Screen Number" name="screen">
               <input type="number"/>
            </Form.Item>
        </Col>

        <Col span={8}>
            <Form.Item label="Movie" name="movieId">
             <select>
             {shows.map((show) => (
                <option key={show._id} value={show._id}>
                  {show.name}
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

         <Col span={8}>
            <Form.Item label="Available" name="isAvailable">
                <select name="isAvailable">
                  <option key={shows._id}  value={"true"}>
                  </option>
                  <option key={shows._id}  value={"false"}>
                  </option>
                </select>  
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
  );
}

export default EditShowForm;
