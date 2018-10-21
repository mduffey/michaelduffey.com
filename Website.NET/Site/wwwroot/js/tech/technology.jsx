class Technology extends React.Component {
    render() {
        return (
            <li className='tech' key={this.props.title}>
                <a href={this.props.url}>{this.props.title}</a>
            </li>
        );
    }
}