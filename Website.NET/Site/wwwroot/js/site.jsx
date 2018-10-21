const render = (content) => {
    ReactDOM.render(content, document.getElementById('content'));
};

const titleBase = document.title;

const loadContent = (path, pushHistory = true) => {
    var name = "";
    switch (path) {
        case '/':
            render(<Introduction url="/home/content" />);
            break;
        case '/portfolio':
            render(<Portfolio url="/portfolio" />);
            name = " - Portfolio";
            break;
    }
    document.title = titleBase + name;
    if (pushHistory) {
        window.history.pushState(null, document.title, path);
    } else {
        window.history.replaceState(null, document.title, path);
    }
};

loadContent(window.location.pathname, false);

