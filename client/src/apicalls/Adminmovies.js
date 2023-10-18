const axiosInstance = require('axios')

//add a new movie

export const AddMovie= async(payload) => {
    try{
        const response = await axiosInstance.post("http://localhost:4000/api/addmovie",payload);
        return response.data;
    }
    catch(error){
        return error.response;
    }

}