import axios from 'axios';
const baseUrl = `https://creativent-app.herokuapp.com/`

export function setBanner (payload) {
  return {
    type: "SET_BANNERS",
    payload
  }
}

export function setLoadingBanner (payload) {
  return {
    type: "SET_LOADING_BANNER",
    payload
  }
}

export function setEventsByOrganizer (payload) {
  return {
    type: "SET_EVENTS_BY_ORGANIZER",
    payload
  }
}

export function setEventsByStatus (payload) {
  return {
    type: "SET_EVENTS_BY_STATUS",
    payload
  }
}

export function setLoadingEvent (payload) {
  return {
    type: "SET_LOADING_EVENTS",
    payload
  }
}

export function setEventsType (payload) {
  return {
    type: "SET_EVENTS_TYPE",
    payload
  }
}

export function setOrganizers (payload) {
  return {
    type: "SET_ORGANIZERS",
    payload
  }
}

export function setLoadingOrganizer (payload) {
  return {
    type: "SET_LOADING_ORGANIZERS",
    payload
  }
}

export function fetchEventsByStatus (payload) {
  return (dispatch, getState) => {
    dispatch(setLoadingEvent(true));
    axios({
      method: "GET",
      url: `${baseUrl}admin/event/`,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    .then((response)=>{
      dispatch(setLoadingEvent(false));
      dispatch(setEventsByStatus(response.data));
    })
    .catch((err)=>{
      dispatch(setLoadingEvent(false));
    })
  }
}

export function fetchEventsByOrganizer (payload) {
  return (dispatch, getState) => {
    dispatch(setLoadingEvent(true));
    axios({
      method: "GET",
      url: `${baseUrl}organizers/events`,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    .then((response)=>{
      dispatch(setLoadingEvent(false));
      dispatch(setEventsByOrganizer(response.data));
    })
    .catch((err)=>{
      dispatch(setLoadingEvent(false));
    })
  }
}

export function fetchEventsType () {
  console.log('Fetch Events Type')
  return (dispatch, getState) => {
    axios({
      method: "GET",
      url: `${baseUrl}admin/eventType`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then((response)=>{
      dispatch(setEventsType(response.data));
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}

export function fetchBanner () {
  return (dispatch, getState) => {
    dispatch(setLoadingBanner(true));
    axios({
      method: "GET",
      url: `${baseUrl}admin/banner`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(response => {
      dispatch(setBanner(response.data));
      dispatch(setLoadingBanner(false));
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export function fetchOrganizerList () {
  return (dispatch, getState) => {
    dispatch(setLoadingOrganizer(true));
    axios({
      method:"GET",
      url: `${baseUrl}admin/organizers`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(response =>{
      dispatch(setOrganizers(response.data));
      dispatch(setLoadingEvent(false));
    })
    .catch(err => {
      console.log(err);
    })
  }
}