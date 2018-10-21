class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", description: "" };
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ title: data.title, description: data.description });
        };
        xhr.send();
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <Paragraphs data={this.state.description} />
            </div>
        );
    }
}

class Paragraphs extends React.Component {
    render() {
        if (this.props.data !== '')
        {
            // The key is the index since we're splitting the paragraph up ourselves.
            let split = this.props.data.split("\n").map((i, key) => <p key={key}>{i}</p>);
            return (<div>{ split }</div>);
        }
        return null;
    }
}