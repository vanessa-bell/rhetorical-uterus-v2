import React, {Component} from 'react'
import logo from '../img/rhetorical-uterus-logo-v2.png'

class Footer extends Component {
	render() {
		return (
			<footer className="container-fluid">
		        <div className="row">
		          <div className="col-md-3">
		            <img className="img img-responsive" id="footer-logo" src={logo} alt="logo"/>
		          </div>
		        </div>
		     </footer>
		)
	}
}

export default Footer;

