import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import ShowList from './ShowList';
import axios from 'axios';
import DeleteShow from '../../components/DeleteShow';
import EditShowForm from './EditShowForm';

function AdminShows() {
  const [show, setShow] = useState([]);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch(err => {
        console.log(err);
      });

    axios.get("http://localhost:4000/api/show")
      .then((response) => {
        const formattedData = response.data.map((showItem) => ({
          ...showItem,
          showDate: new Date(showItem.showDate).toLocaleDateString('en-US'),
        }));
        setShow(formattedData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const openEditForm = (showItem) => {
    setSelectedShow(showItem);
    setIsEditFormVisible(true);
  };

  return (
    <>
      <AdminHeader />
      <ShowList />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Show Date</th>
            <th style={thStyle}>Show Time</th> 
            <th style={thStyle}>Movie ID</th>
            <th style={thStyle}>Screen Number </th>
            <th style={thStyle}>Housefull </th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Edit</th>
            <th style={thStyle}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {show.map((showItem) => (
            <tr key={showItem._id}>
              <td style={tdStyle}>{showItem.showDate}</td>
              <td style={tdStyle}>{showItem.showTime}</td>
              <td style={tdStyle}>{(showItem.movieId)}</td>
              <td style={tdStyle}>{(showItem.screen)}</td>
              <td style={tdStyle}>{(!showItem.isAvailable ? "No" : "Yes")}</td>
              <td style={tdStyle}>${showItem.price}</td>
              <td style={tdStyle}>
                <button className="btnEditMovie" onClick={() => openEditForm(showItem)}>
                  <span className="btnText">Edit Movie</span>
                </button>
              </td>
              <td style={tdStyle}><DeleteShow id={showItem._id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />

      {isEditFormVisible && (
        <EditShowForm
          showShowsFormModal={isEditFormVisible}
          setShowShowsFormModal={setIsEditFormVisible}
          formType="edit"
          selectedShow={selectedShow}
          movies={movies}
        />
      )}
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
  color: 'black',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ccc',
};

export default AdminShows;
