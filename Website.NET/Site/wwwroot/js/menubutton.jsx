class MenuButton extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }
    render() {
        return <button type='button'
            className={this.props.isActive ? 'btn btn-secondary active' : 'btn btn-secondary'}
            onClick={this.handleClick.bind(this)}>{this.props.name}</button>;
    }
}