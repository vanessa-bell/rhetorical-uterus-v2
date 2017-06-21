import React from 'react'
import welcomeUterus from '../img/ru-illustration-main-v1.png';

const IntroBubble = () =>
	(
		<section id="topper" name="#">
	        <div className="container-fluid">
	          <div className="welcome-flex row">
	            <div className="col col-md-5 col-sm-7 talk-bubble tri-right round right-in">
	              <div className="talktext">
	                <h4>Tired of having unproductive, frustrating, downright absurd conversations with your pro-life uncle? I’m here to help!</h4>
	                <h4>My name is Ru, short for Rhetorical Uterus. My job is to help you approach the daunting pro-choice / pro-life debate armed with evidence and a compelling logical argument. Scroll
	                down to refresh your <a href="#debate">debate skills</a>, or if you’re ready, jump to the <a href="#stances">anti-choice stances</a> to start preparing!</h4>
	              </div>
	            </div>
	            <div className="col col-md-6 col-sm-5" id="welcome-uterus">
	              <img className="img img-responsive" src={welcomeUterus} alt="welcoming uterus" />
	            </div>
	          </div>
	        </div>
	    </section>
	)

export default IntroBubble