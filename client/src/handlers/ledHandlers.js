const getLeds = new Promise((resolve, reject) =>
  fetch('http://localhost:3000/api/leds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => {
      const { data = [] } = res.json();
      return resolve(data);
    })
    .catch(reject)
);

export { getLeds };
