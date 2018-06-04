class easyHTTP {
  //GET request
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }

  //POST request
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  }

  //PUT request
  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  }

  //DELETE request
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'Resource deleted.';
    return resData;
  }
}

export const http = new easyHTTP();
