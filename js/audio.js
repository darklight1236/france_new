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
            let AllLoaders = document.querySelectorAll(".loader");
            AllLoaders.forEach(item => {
                if( item != loader ){
                    item.style.opacity = '0';
                }
            });



            if (controls.className == "controls play" ){
                controls.classList.remove("play");
                controls.classList.add("stop");
                loader.style.opacity = "1";
            }else{
                controls.classList.remove("stop");
                controls.classList.add("play");
                loader.style.opacity = "0";
            }
        })

    }
}


window.addEventListener("load",function(){
    document.querySelectorAll(".controls").forEach(element => {
        new CustomAudio(element)
    });
});