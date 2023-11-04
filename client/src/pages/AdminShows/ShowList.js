import React from 'react'
import Button from '../../components/Button';
import ShowForm from './ShowForm';

function ShowList() {
    const[shows,setShows] = React.useState([]);
    const [showShowsFormModal,setShowShowsFormModal] = React.useState(false);
    const [selectedShow,setSelectedShow] = React.useState(null);
    const [formType,setformType] = React.useState("add");
    
    return (
        <div>
    <div className="flex justify-center pt1">
        <Button
        className="btnAddShow"
        title="Add Show"
        variant="outlined"
        onClick={() => {
            setShowShowsFormModal(true);
            setformType("add");
        }}
        />
    </div>
    
        {showShowsFormModal && (
            <ShowForm
            showShowsFormModal ={showShowsFormModal}
            setShowShowsFormModal={setShowShowsFormModal}
            selectedShow={selectedShow}
            setSelectedShow={setSelectedShow}
            formType={formType}
            />
            )}

    </div>
  )
}

export default ShowList