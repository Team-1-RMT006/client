import axios from 'axios'
import Swal from 'sweetalert2'
const url = 'http://localhost:3000/customer'



export const userLogin = (payload) => {
  return (dispatch, getState) => {
    // console.log(payload, "--------");
    return axios({
      method: 'POST',
      url: url + "/login",
      data: {
        email: payload.email,
        password: payload.password
      }
    })
      
  }
}

export const userRegister = (payload) => {
  return (dispatch, getState) => {
    // console.log(payload, "ini di user")
    axios({
      method: 'POST',
      url: url + '/register',
      data: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        password: payload.password
      }
    })
      .then((_) => {
        console.log("tesasssssss");
        Swal.fire('Success to Register')
        // console.log("berhasil")
        dispatch({
          type: "SET_GO_TO_LOGIN",
          data: true
        })
      })
      .catch(err => {
        console.log("--------")
        console.log(err)
      })
  }
}
