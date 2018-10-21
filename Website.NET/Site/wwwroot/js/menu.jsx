// started with https://stackoverflow.com/a/35225464/2659211 - gotta say, jQuery does this a bit better. :)

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: this.buttonList.findIndex(x => x.path === window.location.pathname)
        };
    }


    buttonList = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Website Tech Stack", path: "/tech" }
    ]

    handleClick = (index) => {
        this.setState({ activeIndex: index });
        var path = this.buttonList[index].path;
        loadContent(path, false);
    }

    render() {
        return <div className="btnGroup" role="group" aria-label="Navigation Menu">
            {this.buttonList.map((clickable, i) => {
                return <MenuButton key={clickable.name}
                    name={clickable.name}
                    index={i}
                    isActive={this.state.activeIndex === i}
                    onClick={this.handleClick} />;
            })}</div>;
    }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));