class Paragraphs extends React.Component {
    render() {
        if (this.props.data !== '') {
            // The key is the index since we're splitting the paragraph up ourselves.
            let split = this.props.data.split("\n").map((i, key) => <p key={key}>{i}</p>);
            return (<div>{split}</div>);
        }
        return null;
    }
}