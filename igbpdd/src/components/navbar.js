import React from 'react';

class Navbar extends React.Component {
    	constructor() {
		super();
		this.state = {
			change: false,

		};
	}

  render() {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo">
                        <a className="navbar-brand" href="#">Navbar</a>

                    </div>
                    <div className="menu ml-auto">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            onClick={() => {
                                this.setState({
                                    change: !this.state.change
                                });
                            }}
                            aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`navbar-collapse collapse ${this.state.change && "show"}`} id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-center">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-center">Que creemos</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-center">La iglesia</a>
                            </li>
                            <li className="nav-item active text-center">
                                <a className="nav-link text-center">Noticias</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-center">Galeria</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-center">Multimedia</a>
                            </li>
                            </ul>

                        </div>
                    </div>
            </nav>
        </React.Fragment>
    )
  }
}

export default Navbar;

