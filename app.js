window.onresize = dropdown;
function dropdown() {
    var navDrop = document.getElementById("nav-drop");
    var checkbox = document.getElementById("dropdown");
    if(checkbox.checked == true &&window.innerWidth <=800){
        navDrop.style.display = "none";
    }else{
        navDrop.style.display = "inline-block";
    }
}