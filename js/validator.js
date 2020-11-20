function submit(){
    let arr = document.getElementsByClassName('input_txt')
    for(var i = 0; i < arr.length; i++){
        arr[i].required = true
    }
}