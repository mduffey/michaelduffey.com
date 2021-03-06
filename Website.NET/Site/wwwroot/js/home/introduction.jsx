﻿class Introduction extends React.Component {
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