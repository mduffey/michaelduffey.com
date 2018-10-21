class Tech extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", description: "", technologies: [] };
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ title: data.title, description: data.description, technologies: data.technologies });
        };
        xhr.send();
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <ul>
                    {this.state.technologies.map((e, i) => { return <Technology key={e.name} title={e.name} url={e.url} />; }) }
                </ul>
                <Paragraphs data={this.state.description} />
            </div>
            );
        }
}