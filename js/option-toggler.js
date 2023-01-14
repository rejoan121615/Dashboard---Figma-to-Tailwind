const x = document.querySelector(".option_btn");
let toggler = true

x.onclick = () => {
  if (a == true) {
    toggler = false
    document.querySelector(".demo").style.display = "block";
  }

  else{
    toggler = true
    document.querySelector(".demo").style.display = "none";
  }
};
