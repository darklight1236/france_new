function pushCheck(id) {
    let check = document.querySelector('#'+ id +'_check');
    check.classList.toggle('check_active');
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

