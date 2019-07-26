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
                    <img src="https://ucarecdn.com/0be2fed5-afde-467b-a169-b24e0e985b9f/-/resize/200x/" className="img-fluid text-center" alt="Responsive image"/>
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
                        <ul className="navbar-nav ml-auto">
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

            </nav>
        </React.Fragment>
    )
  }
}

export default Navbar;

