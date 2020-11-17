// window.addEventListener("load",function(){
    Menu.onclick = function() {
        let Navbar = document.querySelector('.NavbarMob');
        Navbar.style.display = 'block';
        console.log("test");
    };
    CloseNavbar.onclick = function(){
        let Navbar = document.querySelector('.NavbarMob');
        Navbar.style.display = 'none';
    }
    function ActiveNav (e){
        let check = document.querySelector('.ActiveNavbar');
        if (check !== undefined && check !== null) {
            check.classList.remove("ActiveNavbar");
        }
        e.target.classList.add("ActiveNavbar");
        let Navbar = document.querySelector('.NavbarMob');
        Navbar.style.display = 'none';
    }
    
    window.onresize = function( event ) {
      let width = event.target.innerWidth;
      if(width < 850) {
          document.querySelector('.NavbarMob').style.display = 'none';
         }
    };
// });

