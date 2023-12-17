document.addEventListener("DOMContentLoaded", () => {
    function points() {
        let point = document.getElementById("points");
        if (point.innerHTML.split("").length == 3) {
            point.innerHTML = "";
        } else {
            point.innerHTML = point.innerHTML + ".";
        };
    };

    async function _inLink(url) {
        document.querySelector(".l").style.display = "block";
        let a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.click();
        await setTimeout(() => {
            document.querySelector(".l").style.display = "none";
        }, 2000);
    };

    setInterval(points, 500);


    (async () => {
        document.querySelector(".l").style.display = "block";

        let block = document.getElementById("commits");

        let req = await fetch("https://api.github.com/repos/Pinbib/QLore/commits?per_page=20");

        req.json().then((value) => {
            let commits = value.map(el => {
                return { date: new Date(el.commit.committer.date).toLocaleDateString(), message: el.commit.message, url: el.html_url };
            });

            commits.forEach((el, i) => {
                let commit = document.createElement("div");
                commit.className = "row el";
                commit.innerHTML = `
                <div class="row el">
                <div class="col-md-1">${el.date}</div>
                <div class="col-md-9">${el.message}</div>
                <div class="col-md-1 btnInstall" id="btn${i}">Open</div>
                </div>
                `;

                block.append(commit);

                document.getElementById("btn" + i).addEventListener("click", async () => {
                    await _inLink(el.url);
                });
            });

            document.querySelector(".l").style.display = "none";
        }).catch((err) => {
            block.innerHTML = `<span style="color: red; font: bold;">Error loading commits, will try again in ten seconds.</span>`;
            document.querySelector(".l").style.display = "none";
            setTimeout(() => location.reload(), 10000);
        });
    })();
});