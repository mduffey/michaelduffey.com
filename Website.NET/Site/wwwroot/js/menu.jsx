// started with https://stackoverflow.com/a/35225464/2659211 - gotta say, jQuery does this a bit better. :)

class Menu extends React.Component {
    state = {
        activeIndex: 0,
        buttons: [
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" }
        ]
    }

    handleClick = (index) => {
        this.setState({ activeIndex: index });
        var path = this.state.buttons[index].path;
        loadContent(path, false);
    }

    render() {
        return <div className="btnGroup" role="group" aria-label="Navigation Menu">
            {this.state.buttons.map((clickable, i) => {
                return <MenuButton key={clickable.name}
                    name={clickable.name}
                    index={i}
                    isActive={this.state.activeIndex === i}
                    onClick={this.handleClick} />;
            })}</div>;
    }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));