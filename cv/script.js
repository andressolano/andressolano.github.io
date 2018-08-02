startpage();


function startpage() {
    let collapse = document.querySelectorAll(".collapse");
    let secc = document.querySelectorAll("section > section, footer > section");
    collapse.forEach(div => {
        div.classList.add("hide");
    });
    secc.forEach(sec => {
        sec.addEventListener("click",function(){
            let collapse = sec.querySelector(".collapse");
            if (collapse.classList.contains("hide")){
                collapse.classList.remove("hide");
            } else{
                collapse.classList.add("hide");
            }
        });
    });
}
