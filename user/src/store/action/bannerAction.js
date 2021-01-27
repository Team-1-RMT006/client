import axios from 'axios'
const url = 'http://localhost:3000/admin/banner'

export const showBanner = () => {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url
    })
      .then(response => {
        console.log(response, '------')
        dispatch({
          type: 'set_banner',
          banner: response.data
        })
      })
      .catch(err => console.log(err))
      .finally(_ => {
        dispatch({
          type: 'banner_loading',
          bannerLoading: false
        })
      })
  }
}
