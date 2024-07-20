document.getElementById("nav").innerHTML = `
 <header>
        
     <img src="assets/images/LOGO.png" class="logo" >
        <nav>
            <ul id="nav-list">
                <li>
                <a href="home.html" class="active">HOME</a>
                </li>
                <li><a href="About US.html">ABOUT US </a></li>
                <div class="dropdown">
                             <li><a href="course.html" class="dropbtn">COURSES
                             <i class="fa fa-caret-down"></i>
                                    </a></li>
                                    <div class="dropdown-content">
                                    <a href="HDSE.html">HDSE</a>
                                    <a href="ADSE.html">ADSE</a>
                                    <a href="sc.html">SHORT COURSES</a>
                                    <a href="lc.html">LANGUAGE COURSES</a>
                                    </div>
                                    </div>    
                                    <li><a href="Contact Us.html">CONTACT US </a></li>
                                    </ul>
                                    </nav>
                                    
                                    <a href="registration.html" class="btn"><button>REGISTER</button></a>
                                    <button hidden id="menu-btn" onclick="menushow()"><img src="assets/images/menu-icon.webp" height="50" width="50" /></button>
                                    <button hidden id="close-menu-btn" onclick="menuhide()"><img src="assets/images/menu-icon.webp" height="50" width="50" /></button>

                                    </header>
    `


function menushow() {
    document.getElementById("nav-list").classList.add("active")
}

function menuhide() {
    document.getElementById("nav-list").classList.remove("active")
}