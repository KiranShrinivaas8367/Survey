const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");

const re = {
  "name": /^[a-z]*$/i,
  "email": /^[\w]*@[a-z]*\.[a-z]{2,}$/
}

nameField.addEventListener("input" ,(e) => {
  const val = e.currentTarget.value;
  const isMatch = re.name.test(val);
  console.log(isMatch)
  console.log(val)

  if(isMatch &&val !== ''){
    console.log(val)
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  }
  else{
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
});

emailField.addEventListener("input", (e) => {
  const val = e.currentTarget.value;
  const isMatch = re.email.test(val);
  console.log(isMatch)
  console.log(val)

  if(isMatch &&val !== ''){
    console.log(val)
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  }
  else{
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
})