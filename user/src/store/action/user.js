import axios from 'axios'
// import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
const url = 'https://creativent-app.herokuapp.com/customer'
// const history = useHistory()


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
    console.log(payload.firstName, "ini di user")
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
        Swal.fire('Success to Register')
        // console.log("berhasil")
        dispatch({
          type: "SET_GO_TO_LOGIN",
          data: true
        })
      })
      .catch(err => {
        console.log("--------")
        console.log(err.response.data.message)
        Swal.fire(`${err.response.data.message}`)
      })
  }
}

