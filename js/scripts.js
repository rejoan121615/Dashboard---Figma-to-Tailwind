const x = document.querySelector(".option_btn");
let a = true

x.onclick = () => {
  if (a == true) {
    a = false
    console.log(a)
    document.querySelector(".demo").style.display = "block";
  }

  else{
    a = true
    document.querySelector(".demo").style.display = "none";
  }
};
