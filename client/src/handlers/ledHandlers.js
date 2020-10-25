const getLeds = new Promise((resolve, reject) =>
  fetch('http://192.168.1.151:8000/api/leds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      const response = await res.json();
      const { data = [] } = response;
      return resolve(data);
    })
    .catch(reject)
);

export { getLeds };
