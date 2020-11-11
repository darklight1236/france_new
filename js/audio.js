class CustomAudio{
    constructor(controls){
        console.log(controls);

        this.controls = controls;
        let block = controls.closest('.person_block');
        block.querySelector('.loader').style.display = 'none';
        this.controls.addEventListener("click", function() {
            
            if( this.controls.className == "controls play"){
                this.controls.classList.remove('play');
                this.controls.classList.add('stop');
                block.querySelector('.loader').style.display = 'flex';
            }else{
                this.controls.classList.remove('stop');
                this.controls.classList.add('play');
                block.querySelector('.loader').style.display = 'none';
            }
        })
    }
}


window.addEventListener("load",function(){
    document.querySelectorAll(".play").forEach(element => {
        new CustomAudio(element)
    });
});