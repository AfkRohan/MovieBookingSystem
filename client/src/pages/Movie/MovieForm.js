import React from 'react'
import {Form, Col,Row,Modal} from 'antd'
import Button from '../../components/Button';
function MovieForm({
    showMovieFormModal,
    setShowMovieFormModal,
    selectedMovie,
    setSelectedMovie,
    formType

}) {

    const onFinish =(values) => {};
  return (
   <Modal
   title={formType === "add"? "Add Movie":"Edit Movie"}
    open={showMovieFormModal}
    onCancel={() => setShowMovieFormModal(false)}
    // onCancel={()=> setShowMovieFormModal(false)}
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
            <Form.Item label="Movie Name" name="title">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={24}>
            <Form.Item label="Movie Description" name="description">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Poster URL" name="poster">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Trailer URL" name="trailer">
               <input type="text"/>
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label="Rating" name="rating">
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