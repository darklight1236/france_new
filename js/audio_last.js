
class CustomAudio{
    constructor(element){

        this.element = element;
        let controls = this.element;
        console.log(controls);
        let loader = controls.parentNode.querySelector('.loader');
        controls.addEventListener("click", function() {

            let AllAudio = document.querySelectorAll(".controls");
            AllAudio.forEach(item => {
                if( item != controls ){
                    item.classList.remove("stop");
                    item.classList.add("play");
                }
            });
            

            if (controls.className == "person_control play_p" ){
                controls.classList.remove("play_p");
                controls.classList.add("stop_p");
            }else{
                controls.classList.remove("stop_p");
                controls.classList.add("play_p");
            }
        })

    }
}


window.addEventListener("load",function(){
    document.querySelectorAll(".person_control").forEach(element => {
        new CustomAudio(element)
    });
});