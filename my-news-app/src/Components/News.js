import { Component } from 'react';
import Article from "./Article";
import Error from "./Error";

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            error: false,
        }
    }

    componentDidMount() {
        // fetch data
        fetch(`https://newsapi.org/v2/${this.props.news.category}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API_KEY}`).then((response) => {
            return response.json();
        }).then((data) => {

            if (data.status === "error") {
                this.setState({
                    articles: [],
                    error: true,
                })
                return
            }
            console.log(data);
            this.setState({
               articles: data.articles,
            })
        }).catch((error) => {
            this.setState({
                articles: [],
                error: true,
            })
        });
    }

    render() {
        if (this.state.error) {
            return <Error />
        } else {
            return (
                <div>
                    {this.state.articles?.map((article) => <Article key={article.url} item={article} />)}
                </div>
            )
        }
        
    }
}

export default News;