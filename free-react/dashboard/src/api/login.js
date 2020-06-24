const LoginApi = () => {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    body: { username: 'test', password: '1234!' },
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
};

export { LoginApi };
