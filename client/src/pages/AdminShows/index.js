import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import ShowList from './ShowList';
import axios from 'axios';
import { Table } from 'antd';
import DeleteShow from '../../components/DeleteShow';

function AdminShows() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/show")
      .then((response) => {
        const formattedData = response.data.map((show) => ({
          ...show,
          showDate: new Date(show.showDate).toLocaleDateString('en-US'),
        }));
        setShow(formattedData);
        console.log(formattedData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AdminHeader />
      <ShowList />

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Show Date</th>
            <th style={thStyle}>Show Time</th>
            <th style={thStyle}>Screen Number</th> 
            <th style={thStyle}>Movie ID</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Edit</th>
            <th style={thStyle}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {show.map((show) => (
            <tr key={show._id}>
              <td style={tdStyle}>{show.showDate}</td>
              <td style={tdStyle}>{show.showTime}</td>
              <td style={tdStyle}>{show.screen}</td>
              <td style={tdStyle}>{show.movieId}</td>
              <td style={tdStyle}>${show.price}</td> 
              <td style={tdStyle}>Edit</td>
              <td style={tdStyle}><DeleteShow id={show._id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
}

const tableStyle = {
  border: '1px solid #ccc',
  width: '90%',
  borderCollapse: 'collapse',
  margin: '5em',
};

const thStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  textAlign: 'left',
  border: '1px solid #ccc',
  color:'black'
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ccc',
};

export default AdminShows;