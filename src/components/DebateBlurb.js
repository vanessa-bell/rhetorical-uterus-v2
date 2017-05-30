import React, {Component} from 'react'
import welcomeUterus from '../img/ru-illustration-main-v1.png';
import rightCaret from '../img/caret-right-red.svg';
import downArrow from  '../img/circle-arrow-down-blue.svg'

class DebateBlurb extends Component {
  render() {
    return (
      <section id="debate" className="debate container-fluid">
        <header className="row">
          <div className="col-md-11">
            <h1 className="section-header pull-right">debate 101</h1>
          </div>
        </header>

        <div className="row">
          <div className="col col-md-6" id="welcomeUterus">
            <img className="img-responsive" src={welcomeUterus} alt="teaching uterus" />
          </div>
          <div className="col-md-5">
            <div className="flex-container">
              <h3 className="first-line">need to brush up on the basics</h3>
              <h3 className="second-line">of rhetorical discourse? RU can help!</h3>
              <h2 className="red-call">let's go!<img src={rightCaret} id="right-caret" alt="right-caret"/></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="ready-debate" className="col col-md-12 text-center">
            <a href="#stances">
              <h3 className='ready'>ready to debate!</h3>
              <img className="down-arrow" src={downArrow} alt="downArrow"/>
            </a>
          </div>
        </div>
          

      </section>
    )
  }
}

export default DebateBlurb;


