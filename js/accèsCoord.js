document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let menu, swish, footer, test2,nom,email,expr,num,postal, message, submit, warning, erreur, erreur2, erreur3, erreur4, click, click2, click3,click4;
    swish = document.querySelector("main");
    footer = document.querySelector("footer");
    main = document.querySelector("body");
    el = document.querySelector("accès");
    test = document.querySelector("header .nav");
    test2 = document.querySelector("header .navi");
    menu = document.querySelector("header .menu");
    click = document.querySelector("header nav .nav li");
    click2 = document.getElementsByTagName("li")[2];
    click3 = document.getElementsByTagName("li")[3];
    click4 = document.getElementsByTagName("li")[4];
    message = document.querySelector("p");
    erreur = document.querySelector("h3");
    erreur2 = document.getElementById("Nom");
    erreur3 = document.getElementById("email");
    erreur4 = document.getElementById("num");
    erreur5 = document.getElementById("code");
    warning = document.querySelector("div");
    submit = document.getElementById("pay");
    expr = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    valid = /^[0-9]/;
    
    menu.addEventListener("click", () => {
        test.classList.toggle("nav");
        test.classList.add("navi");
        test.classList.remove("swish")
        swish.classList.toggle("swish");
        footer.classList.toggle("swish");
    });
    click.addEventListener("click", () => {
        window.location.assign("./site.html");
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
    Storage.clear;
    submit_session = sessionStorage.getItem("sessionstime");
    submit_log = localStorage.getItem("date");
    submit_log2 = localStorage.getItem("time");

    message.innerText=`${submit_log} | ${submit_log2}`;



    class User {
        constructor(nom, email, num, postal) {
            this.nom = document.getElementsByTagName("input")[0].value;
            this.email = document.getElementsByTagName("input")[1].value;
            this.num = document.getElementsByTagName("input")[2].value;
            this.postal = document.getElementsByTagName("input")[3].value;
        }
        getOut() {
            console.log(nom, email, num, postal);
        }
        verif() {
            if (this.nom && this.email && this.num && this.postal) {
                localStorage.setItem("user", this.email); //stocker le login
                sessionStorage.setItem("user", "sessionid");
                submit.addEventListener("click", e => {
                    window.location.assign("./Paiement.html");
                });
            }
            else{
                message.innerHTML += ` <br> Veuillez saisir les champs `;
            }
            if (this.nom){
                erreur2.classList.remove("red");
            }
            else{
                erreur2.classList.add("red");
            }
            if (this.email){
                erreur3.classList.remove("red");
            }
            else{
                erreur3.classList.add("red");
            }
            if (this.num){
                erreur4.classList.remove("red");
            }
            else{
                erreur4.classList.add("red");
            }
            if (this.postal){
                erreur5.classList.remove("red");
            }
            else {
                erreur5.classList.add("red");
            }
        }
    }
    submit.addEventListener("click", e => {
        e.preventDefault();
        let createUser = new User(nom, email, num, postal);
        createUser.verif();
    });
});