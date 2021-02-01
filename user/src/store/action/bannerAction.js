import axios from 'axios'
// const url = 'http://localhost:3000/admin/banner'
const url = `https://creativent-app.herokuapp.com/admin/banner`

export const showBanner = () => {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url
    })
    .then(response => {
        dispatch({
          type: 'SET_BANNER',
          banner: response.data
        })
      })
      .catch(err => console.log(err))
      .finally(_ => {
        dispatch({
          type: 'BANNER_LOADING',
          bannerLoading: false
        })
      })
  }
}
