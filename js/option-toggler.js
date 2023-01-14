const x = document.querySelector(".option_btn");
let toggler = true;

x.onclick = () => {
    if (toggler == true) {
        toggler = false;
        document.querySelector(".options_panel").style.display = "block";
    } else {
        toggler = true;
        document.querySelector(".options_panel").style.display = "none";
    }
};
