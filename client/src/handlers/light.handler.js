const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getLights = new Promise((resolve, reject) =>
  fetch('http://localhost:8000/api/leds', {
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
    fetch(`http://localhost:8000/api/toggle-led/${_id}`, {
      method: 'PUT',
      headers,
    })
      .then((res) => resolve(res.status))
      .catch(reject)
  );

const createLight = (led) =>
  new Promise((resolve, reject) =>
    fetch('http://localhost:8000/api/led', {
      method: 'PUT',
      headers,
      body: JSON.stringify(led),
    })
      .then(async (res) => {
        const response = await res.json();
        return resolve(response);
      })
      .catch(reject)
  );

const updateLight = (led) =>
  new Promise((resolve, reject) =>
    fetch('http://localhost:8000/api/led', {
      method: 'POST',
      headers,
      body: JSON.stringify(led),
    })
      .then(async (res) => {
        const response = await res.json();
        return resolve(response);
      })
      .catch(reject)
  );

const deleteLight = (_id) =>
  new Promise((resolve, reject) =>
    fetch(`http://localhost:8000/api/led/${_id}`, {
      method: 'DELETE',
      headers,
    })
      .then((res) => resolve(res.status))
      .catch(reject)
  );

export { createLight, getLights, updateLight, toggleLight, deleteLight };
