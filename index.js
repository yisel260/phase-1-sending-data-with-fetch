// Add your code here
function submitData(UserName, userEmail) {
    const formData = {
      name: UserName,
      email: userEmail,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const element = document.createElement('h1');
        element.textContent = object.id;
        document.body.append(element);
      })
      .catch(function (error) {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = error
        document.body.append(errorMessage)
      });
  }