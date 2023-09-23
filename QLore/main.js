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
        document.querySelector(".l").style.display = "block";
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
});