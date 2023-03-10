let user = getUser();

const form = document.querySelector("#form-login");

form.addEventListener("submit", login);

function login(e) {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  const userAlreadyExists = user.find(
    (user) => user.email === email && user.password === password
  );

    

  if (userAlreadyExists) {

    let userLogado = {
      id: userAlreadyExists.id,
      name: userAlreadyExists.name,
      email: userAlreadyExists.email,
      photo: userAlreadyExists.photo,
      token: Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2),
    }
    
    setUserLogado(userLogado);
    window.location.href = "./pages/home.html";
    console.log(getUserLogado());
  } else {
    let error = document.querySelector("#error-user");
    error.innerHTML = "Usuário ou senha inválidos";
  }
}