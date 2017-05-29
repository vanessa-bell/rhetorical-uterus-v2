import React, {Component} from 'react'
import logo from '../img/rhetorical-uterus-logo-v2.png'

class Header extends Component {
	render() {
		return (
			<header id="top-header" className="row text-center container-fluid">
	        	<img className="text-center" id="logo" src={logo} alt="RU logo"/>
	      	</header>
		)
	}
}

export default Header;