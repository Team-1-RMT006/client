import axios from 'axios'
const url = 'http://localhost:4000/customer'

// export const userLogin = () => {
//   return (dispatch, getState) => {
//     axios({
//       method: 'post',
//       url,
//       data: {
//         email,
//         password
//       }
//     })
//     .then(res => (
//         res.json()
//       ))
//       .then(data => {
//         dispatch({
//           type: 'LOGIN',
//           payload: data
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//       .finally(() => {
//         dispatch({
//           type: 'LOADING',
//           payload: false
//         })
//       })
//   }
// }

export const userRegister = (payload) => {
  return (dispatch, getState) => {
    console.log(payload)
    axios({
      method: 'post',
      url: url + '/register',
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password
      }
    })
    .then(() => console.log('berhasil'))
    .catch(err => console.log(err))
  }
}

