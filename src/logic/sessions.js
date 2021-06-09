const login = async (name, password) => {
  const credentials = {
    name,
    password,
  };
  fetch('https://4ae399fe2aa7.ngrok.io/login', {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};

export { login };
