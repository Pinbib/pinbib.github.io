function urlJoin(...parts) {
    const separator = '/';
    const normalizedParts = parts.map(part => {
        if (typeof part === 'string') {
            return part.replace(/\/+$/, '').replace(/^\/+/, '');
        }
        return part;
    });
    return normalizedParts.join(separator);
}

function toUrlJoin(path, ...arg) {
    let url = document.createElement("a");
    url.href = urlJoin(path, arg);
    url.target = "_blank";
    url.click();
};

document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("command");
    setInterval(() => {
        if (input.placeholder == "|") {
            input.placeholder = "";
        } else {
            input.placeholder = "|";
        };
    }, 500);

    document.addEventListener("keyup", (ev) => {
        if (ev.key == "Enter") {
            if (input.value.trim() != "") {
                let span = document.createElement("span");
                span.innerText = input.value.trim();
                document.getElementById("history").append(span);

                toUrlJoin("/", input.value.trim().split(" "));
                input.value = "";
            };
        };
    });
});