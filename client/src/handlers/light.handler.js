const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getLights = new Promise((resolve, reject) =>
  fetch('http://localhost:8000/api/lights', {
    method: 'GET',
    headers,
  })
    .then(async (res) => {
      const response = await res.json();
      const { data = [] } = response;
      return resolve(data);
    })
    .catch(reject)
);

const toggleLight = (_id) =>
  new Promise((resolve, reject) =>
    fetch(`http://localhost:8000/api/toggle-light/${_id}`, {
      method: 'PUT',
      headers,
    })
      .then((res) => resolve(res.status))
      .catch(reject)
  );

const createLight = (light) =>
  new Promise((resolve, reject) =>
    fetch('http://localhost:8000/api/light', {
      method: 'PUT',
      headers,
      body: JSON.stringify(light),
    })
      .then(async (res) => {
        const response = await res.json();
        return resolve(response);
      })
      .catch(reject)
  );

const updateLight = (light) =>
  new Promise((resolve, reject) =>
    fetch('http://localhost:8000/api/light', {
      method: 'POST',
      headers,
      body: JSON.stringify(light),
    })
      .then(async (res) => {
        const response = await res.json();
        return resolve(response);
      })
      .catch(reject)
  );

const deleteLight = (_id) =>
  new Promise((resolve, reject) =>
    fetch(`http://localhost:8000/api/light/${_id}`, {
      method: 'DELETE',
      headers,
    })
      .then((res) => resolve(res.status))
      .catch(reject)
  );

export { createLight, getLights, updateLight, toggleLight, deleteLight };
