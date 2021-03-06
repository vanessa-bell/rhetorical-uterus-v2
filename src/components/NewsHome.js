import React, {Component} from 'react'
import axios from 'axios';
import moment from 'moment';

class NewsHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const APIKey = '2eca7df7c2204c69b0f72c2c7f62afc3';
    let term = "abortion"
    var _this = this;
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': term,
      }
    })
    .then(function(results){
          // console.log(results.data.response.docs)
          _this.setState({
            articles: results.data.response.docs
          });
        })
  }

  render() {
    return (
     <section id="recent-news" name="recent-news">
      <header className="row">
        <div className="col-lg-11 col-md-10 col-sm-8 col-xs-12">
          <h1 className="section-header pull-right">in the news</h1>
        </div>
      </header>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3 className="first-line pull-right">catch up on the latest news on abortion</h3>
        </div>
      </div>
      <div className="row">
        <div className="news-wrapper col-xl-7 col-lg-7 col-md-7 col-sm-11 col-xs-12">
          <ul className="news-articles text-right scrollable well">
            {this.state.articles.map(article =>
                <li className='article-info' key={article._id}>
                  <a className='news-article-link' href={article.web_url} target="_blank" rel="noopener noreferrer">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-11">
                      <h3 className="article-headline">{article.headline.main}</h3>
                      <p>{article.pub_date !== null ? moment(article.pub_date).format('MMMM Do, YYYY') : ''}</p>
                      <p className="snippet">{article.snippet}</p>
                      <p className="read-more">read more ></p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-1">
                        {
                          <img className="thumbnail img img-responsive" src={article.multimedia.length ? 'https://www.nytimes.com/' + article.multimedia[0].url : 'http://www.sgberman.com/wp-content/uploads/2014/10/nyt.png'} alt="article thumbnail"/>
                        }
                    </div>
                  </div>
                  </a>
                </li>

            )}
          </ul>
        </div>
      </div>
     </section>
    )
  }
}

export default NewsHome;