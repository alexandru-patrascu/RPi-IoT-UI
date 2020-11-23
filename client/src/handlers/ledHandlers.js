const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getLeds = new Promise((resolve, reject) =>
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

const toggleLed = (_id) =>
  new Promise((resolve, reject) =>
    fetch(`http://localhost:8000/api/toggle-led/${_id}`, {
      method: 'PUT',
      headers,
    })
      .then((res) => resolve(res.status))
      .catch(reject)
  );

export { getLeds, toggleLed };
