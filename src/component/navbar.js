import React from "react"
 
export default class Navigation extends React.Component {
    render () {
        return ( <div> <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="index.html">Home Page</a>
                <a className="dropdown-item" href="index.html">About me</a>
                <div className="dropdown-divider"></div>
              </div>
            </li>
            <li className="nav-item">
            </li>
          </ul>
          
        </div>
      </nav>
      </div>
        )
    }
}
