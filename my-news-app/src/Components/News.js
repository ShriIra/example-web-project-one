import { useEffect, useState } from 'react';
import Article from "./Article";
import Error from "./Error";

export default function News({news}) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/${news.category}?${news.query}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then(setData)
        .catch(setError);
    }, [news])

    if (error) {
        return <Error />
    }
    return (
        <div>
            {data.articles?.map((article) => <Article key={article.url} item={article} />)}
        </div>
    )
    
}