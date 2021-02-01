import axios from 'axios';

const baseUrl = "https://creativent-app.herokuapp.com/"

export function CreateNewEvent(payload, checked, role) {
  let postUrl = `${baseUrl}organizers/events`
  if(role === 'true') {
    postUrl = `${baseUrl}admin/event`
  } else {
    delete payload.organizerId;
  }

  if(!checked.regular) {
    delete payload.price_regular;
    delete payload.capacity_regular;
  }
  if(!checked.vip) {
    delete payload.price_vip;
    delete payload.capacity_vip;
  }
  if(!checked.vvip) {
    delete payload.price_vvip;
    delete payload.capacity_vvip;
  }

  console.log(payload, 'dariApiRequest');
  return axios({
    method: "POST",
    url: postUrl,
    data: payload,
    headers: {
      access_token: localStorage.getItem("access_token")
    }
  })
}

export function updateEvent (payload, checked, role, id){
  let putUrl = `${baseUrl}organizers/events/${id}`
  if(role === 'true') {
    putUrl = `${baseUrl}admin/event/${id}`
  } else {
    delete payload.organizerId;
  }

  console.log(putUrl);
  
  if(!checked.regular) {
    payload.price_regular = null;
    payload.capacity_regular = null;
  }
  if(!checked.vip) {
    payload.price_vip = null;
    payload.capacity_vip = null;
  }
  if(!checked.vvip) {
    payload.price_vvip = null;
    payload.capacity_vvip = null;
  }

  return axios({
    method: "PUT",
    url: putUrl,
    data: payload,
    headers: {
      access_token: localStorage.getItem("access_token")
    }
  })
}


export function AddNewEventType(payload) {
  return axios({
    method: "POST",
    url: `${baseUrl}admin/eventType`, 
    data: {
      name: payload.eventType
    },
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
}


export function DeleteEvent(id) {
  let deleteUrl = `${baseUrl}organizers/events/${id}`;

  if(localStorage.getItem('isAdmin') === 'true'){
    deleteUrl = `${baseUrl}admin/event/${id}`
    return axios({
      method: "DELETE",
      url: deleteUrl,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
  } else {
    return axios({
      method: "PUT",
      url: deleteUrl,
      data: {
        StatusId: 3
      },
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
  }
  console.log(deleteUrl);
}

export function GetDetail (id) {
  let detailUrl = `${baseUrl}organizers/events/${id}`;
  console.log(localStorage.getItem('isAdmin'));
  if(localStorage.getItem('isAdmin') === 'true') {
    detailUrl = `${baseUrl}admin/event/${id}`;
  }
  console.log(detailUrl);
  return axios({
    method: "GET",
    url: detailUrl,
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
}

export function AddNewBanner (payload) {
  return axios({
    method: "POST",
    url: `${baseUrl}admin/banner`,
    data: payload,
    headers: {
      access_token : localStorage.getItem('access_token')
    }
  })
}

export function EditPutBanner (payload) {
  return axios({
    method: "PUT",
    url: `${baseUrl}admin/banner/${payload.id}`,
    data: {
      image_url: payload.image_url,
      detail: payload.detail
    },
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
}

export function RemoveBanner (id) {
  return axios({
    method: "DELETE",
    url: `${baseUrl}admin/banner/${id}`,
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
}