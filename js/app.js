function pushCheck(id) {
    let check = document.querySelector("#"+ id +"_check");
    check.classList.toggle("check_active");
}

function labelShow(id){
    let input = document.querySelector(`#${id}`).value; 
    let el = document.querySelector(`#d_${id}`);
    if(input.trim().length > 0){
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }    
}

function videoShow(){
    document.getElementById("poster").hidden = true
    document.getElementById("player").removeAttribute("hidden")
    document.getElementById("player").play()
}

function closeCookie(){
    document.querySelector(".cookie_box").style.display = "none"
}

const secretKey = "6Le8kOIZAAAAADAmcd2RjszWcN6_flOZtoE3tA1x";
const siteKey = "6Le8kOIZAAAAAC-7KMNyplEKZ_WG_gvTmz5F8vUZ"
