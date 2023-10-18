const {axiosInstance} = require(".");

//add a new movie

const AddMovie= async(payload) => {
    try{
        const response = await axiosInstance.post("api/movies/addmovie",payload);
        return response.data;
    }
    catch(error){
        return error.response;
    }

}
module.export = (AddMovie)