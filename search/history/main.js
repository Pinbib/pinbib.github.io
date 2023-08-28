document.addEventListener("DOMContentLoaded", () => {
    function creatAndOpenUrl(href) {
        let a = document.createElement("a");
        a.target = "_blank";
        a.href = href;
        a.click();
    };

    if (!localStorage.getItem("history")) {
        localStorage.setItem("history", "[]");
        window.location.reload();
    } else {
        let history = JSON.parse(localStorage.getItem("history"));
        let histor = document.getElementById("history");

        history.forEach((val) => {
            let div = document.createElement("div");
            div.className = "hist-card";
            div.innerHTML = `<a href="${val.url}" target="_blank" class="hist-name">${val.name}</a>`;
            histor.append(div);
        });
    };

    document.getElementById("btn_search").addEventListener("click", () => {
        creatAndOpenUrl("../");
    });
});