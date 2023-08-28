// import Git from "./GIT.js";

if (!localStorage.getItem("history")) {
    localStorage.setItem("history", "[]");
};

document.addEventListener("DOMContentLoaded", () => {
    let static = {};

    function creatAndOpenUrl(href) {
        let a = document.createElement("a");
        a.target = "_blank";
        a.href = href;
        a.click();
    };

    function profile(val) {
        document.getElementById("img_avatar").src = val.avatar_url;
        document.getElementById("username").innerText = val.name;
        document.getElementById("bio").innerText = val.bio;

        if (val.blog != "") {
            document.getElementById("blog").innerText = "Blog";
            document.getElementById("blog").href = val.blog;
        } else {
            document.getElementById("blog").innerHTML = "No Blog";
            document.getElementById("blog").href = "./";
        };

        if (val.company != null) {
            document.getElementById("company").innerText = val.company;
        } else {
            document.getElementById("company").innerText = "No Company";
        };

        document.getElementById("repos_num").innerText = val.public_repos;

        if (val.email != null) {
            document.getElementById("e_mail").innerText = val.email;
        } else {
            document.getElementById("e_mail").innerText = "No E-mail";
        };

        document.getElementById("follos_num").innerText = val.followers;

        document.getElementById("repositories").innerHTML = "<span>Repositories:</span><br>";
        document.getElementById("followers").innerHTML = "<span>Followers:</span><br>";
    };

    function followers(val) {
        let follos = document.getElementById("followers");

        val.forEach(valu => {
            let card = document.createElement("div");
            card.className = "foll-card";
            card.innerHTML = `<a href="${valu.html_url}" target="_blank" class="foll-name">${valu.login}</a>`;
            follos.append(card);
        });
    };

    function repositories(val) {
        let repos = document.getElementById("repositories");

        val.forEach(valu => {
            let card = document.createElement("div");
            card.className = "rep-card";
            card.innerHTML = `<a href="${valu.html_url}" target="_blank" class="rep-name">${valu.name}</a>`;
            repos.append(card);
        });
    };

    Git.getUser("Pinbib", val => { static = val; profile(val) });

    document.getElementById("btn_search").addEventListener("click", () => {
        let input = document.getElementById("search_input");

        if (input.value.trim() != "") {
            Git.getUser(input.value.trim(), val => { static = val; profile(val) });
        };
    });

    document.getElementById("btn_followers").addEventListener("click", () => {
        Git.getFollower(static.login, val => followers(val));
    });

    document.getElementById("btn_repos").addEventListener("click", () => {
        Git.getRepos(static.login, val => repositories(val));
    });

    document.getElementById("btn_open").addEventListener("click", () => {
        creatAndOpenUrl(static.html_url);
    });

    document.getElementById("btn_save").addEventListener("click", () => {
        let history = JSON.parse(localStorage.getItem("history"));

        if (!history.some(val => val.url == static.html_url && val.name === static.name)) {
            history.push({
                url: static.html_url,
                name: static.name
            });
        };
        localStorage.setItem("history", JSON.stringify(history));
    });

    document.getElementById("btn_history").addEventListener("click", () => creatAndOpenUrl("./history"))
});