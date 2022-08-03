import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://localhost:5001/books/';
class UserService {
    async getAll() {
        console.log(1);
        // axios.use(function(req, res, next) {
        //     res.header("Access-Control-Allow-Origin", "*");
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        //     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
        //     next();
        //   });
          console.log(2);
        try{
            let response = await axios.get(API_URL);
            console.log(response);
            return response;
        }
        catch(err){
            console.log(err);
        }

  }//Ctrl + K  +  Ctrl + C
//   getUserBoard() {
//     return axios.get(API_URL + 'user', { headers: authHeader() });
//   }
//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }
//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}
export default new UserService();