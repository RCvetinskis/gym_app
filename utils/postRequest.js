const postRequest = (data, apiLink, setError) => {
  fetch(apiLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        setError(data.message);
      }
    });
};

export default postRequest;
