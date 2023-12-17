(async () => {
    let req = await fetch("https://raw.githubusercontent.com/Pinbib/QLore/main/package.json");
    req.json().then(val => {
        document.querySelector("#version").innerHTML = `v${val.version}`;
    }).catch(err => {
        if (err) document.querySelector("#version").innerHTML = `v?`;
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    async function inLink(url) {
        document.querySelector(".l").style.display = "block";
        let a = document.createElement("a");
        a.href = url;
        a.click();
        await setTimeout(() => {
            document.querySelector(".l").style.display = "none";
        }, 2000);
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
    function points() {
        let point = document.getElementById("points");
        if (point.innerHTML.split("").length == 3) {
            point.innerHTML = "";
        } else {
            point.innerHTML = point.innerHTML + ".";
        };
    };

    setInterval(points, 500);

    document.getElementById("installWindow").addEventListener("click", async () => {
        await inLink("https://github.com/Pinbib/QLore/raw/main/PKG/win/QLore.exe");
    });
    document.getElementById("installMacOs").addEventListener("click", async () => {
        await inLink("https://github.com/Pinbib/QLore/raw/main/PKG/macos/QLore");
    });
    document.getElementById("installLinux").addEventListener("click", async () => {
        await inLink("https://github.com/Pinbib/QLore/raw/main/PKG/linux/QLore");
    });
    document.getElementById("installVSCode").addEventListener("click", async () => {
        await inLink("https://github.com/Pinbib/QLore/raw/main/VSCode/QLoreVSCode.zip");
    });
    document.getElementById("github").addEventListener("click", async () => {
        await _inLink("https://github.com/Pinbib/QLore");
    });
    document.getElementById("more").addEventListener("click", () => {
        document.getElementById("more").parentElement.innerHTML = `
        <div class="col-md-4"></div>
        <div class="btnInstall col-md-2" id="docs"><span>Docs</span></div>
        <div class="btnInstall col-md-2" id="commits"><span>Commits</span></div>
        `;

        document.getElementById("docs").addEventListener("click", async () => {
            await _inLink("Docs");
        });
        document.getElementById("commits").addEventListener("click", async () => {
            await _inLink("Commits");
        });
    });
});