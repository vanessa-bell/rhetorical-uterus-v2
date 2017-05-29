import React, {Component} from 'react'

class NewsHome extends Component {
  render() {
    return (
     <section id="recent-news" name="recent-news">
      <header className="row">
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <h1 className="section-header pull-right">in the news</h1>
        </div>
      </header>
      <div className="row">
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <h3 className="first-line pull-right">catch up on the latest news on abortion</h3>
        </div>
      </div>
      <div className="scrollable">
      </div>
     </section>
    )
  }
}

export default NewsHome;

