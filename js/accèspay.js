document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let menu, swish, footer, test2,submit_log,submit_session, message, submit, warning, erreur, erreur2, erreur3, erreur4, click, click2, click3,click4;
    swish = document.querySelector("main");
    footer = document.querySelector("footer");
    main = document.querySelector("body");
    el = document.querySelector(".night");
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
    erreur3 = document.getElementById("mail");
    erreur4 = document.getElementById("num");
    erreur5 = document.getElementById("code");
    warning = document.querySelector("div");
    submit = document.getElementById("pay");
    submit_session = sessionStorage.getItem("session");
    submit_log = localStorage.getItem("user");
    console.log(submit_log)
    erreur3.innerHTML += `<form method="get">
                            <label for="Mail"> Adresse Mail <span class="star">*</span></label>
                            <br>
                            <input type="text" name="Mail" id="Mail" value="${submit_log}" placeholder="" aria-required="true" autofocus>
                            </form>`;

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
    submit.addEventListener("click", e => {
        e.preventDefault();
        localStorage.clear();
        sessionStorage.clear();
    });


});