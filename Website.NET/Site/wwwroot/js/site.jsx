const render = (content) => {
    ReactDOM.render(content, document.getElementById('content'));
};

const titleBase = window.name;

const loadContent = (path, pushHistory = true) => {
    var name = "";
    switch (path) {
        case '/':
            render(<Introduction url="/home/content" />);
            break;
        case '/portfolio':
            render(<Portfolio url="/portfolio" />);
            name = "- Portfolio";
            break;
    }
    if (pushHistory) {
        window.history.pushState(null, titleBase + name, path);
    } else {
        window.history.replaceState(null, titleBase + name, path);
    }
};

loadContent(window.location.pathname, false);

