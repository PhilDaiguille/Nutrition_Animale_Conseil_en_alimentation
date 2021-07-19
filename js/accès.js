document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let menu, swish, footer, test2, date, time, message, submit, warning, erreur2, erreur3, click, click2, click3,click4;
    swish = document.querySelector("main");
    footer = document.querySelector("footer");
    main = document.querySelector("body");
    el = document.querySelector("body .accès");
    test = document.querySelector("header .nav");
    test2 = document.querySelector("header .navi");
    menu = document.querySelector("header .menu");
    click = document.querySelector("header nav .nav li");
    click2 = document.getElementsByTagName("li")[2];
    click3 = document.getElementsByTagName("li")[3];
    click4 = document.getElementsByTagName("li")[4];
    message = document.querySelector("p");
    erreur2 = document.getElementById("date");
    erreur3 = document.getElementById("time");
    warning = document.querySelector("div");
    submit = document.getElementsByTagName("input")[2];

    menu.addEventListener("click", () => {
        test.classList.toggle("nav");
        test.classList.add("navi");
        test.classList.remove("swish")
        swish.classList.toggle("swish");
        footer.classList.toggle("swish");
    });
    click.addEventListener("click", () => {
        window.location.assign("./site.html#");
        
    });
    click2.addEventListener("click", () => {
        test.classList.toggle("swish");
        test.classList.toggle("nav");
        test.classList.remove("swish")
        test.classList.add("nav")
        swish.classList.remove("swish");
        footer.classList.remove("swish");
        window.location.assign("./site.html#Services");
        
    });
    click3.addEventListener("click", () => {
        test.classList.toggle("swish");
        test.classList.toggle("nav");
        test.classList.remove("swish")
        test.classList.add("nav")
        swish.classList.remove("swish");
        footer.classList.remove("swish");
        window.location.assign("./site.html#Propos");
        
    });
    click4.addEventListener("click", () => {
        test.classList.toggle("swish");
        test.classList.toggle("nav");
        test.classList.remove("swish")
        test.classList.add("nav")
        swish.classList.remove("swish");
        footer.classList.remove("swish");
        window.location.assign("./site.html#Conctact");
        
    });
    class User {
        constructor(date, time) {
            this.date = document.getElementsByTagName("input")[0].value;
            this.time = document.getElementsByTagName("input")[1].value;
        }
        getOut() {
            console.log(date, time);
            return `${this.date} : ${this.time}`;
        }
        verif() {
            if (this.date && this.time) {
                message.classList.remove("star");
                message.innerHTML = `Par téléphone <br> ${this.date} | ${this.time}`;
                localStorage.setItem("date", this.date); //stocker le login
                localStorage.setItem("time", this.time);
                sessionStorage.setItem("date", "sessiondate");
                sessionStorage.setItem("time", "sessiontime");
                submit.addEventListener("click", e => {
                    window.location.assign("./Coordonnée.html");
                });
            }
            else{
                message.innerText = ` Choisissez une date et une heure pour continuer `;
                message.classList.add("star");
            }
            if (this.date){
                erreur2.classList.remove("red");
            }   
            else{
                erreur2.classList.add("red");
            }
            if (this.time){
                erreur3.classList.remove("red");
            }
            else{
                erreur3.classList.add("red");
            } 
        }
    }
    submit.addEventListener("click", e => {
        e.preventDefault();
        let createUser = new User(date, time);
        createUser.verif();
    });
});