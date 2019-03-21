import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return <h4>Loading ...</h4>;
      case false:
        return (
          <li>
            <Link to="/auth/google">Login with Google</Link>
          </li>
        );
      default:
        return (
          <li>
            <Link to="/api/logout">Logout</Link>
          </li>
        );
    }
  }
  render() {
    const { auth } = this.props;
    console.log("auth in header: ", auth);
    return(
      <nav>
        <div className="nav-wrapper">
          <Link
            to={auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Logo
          </Link>
          <ul id="nav-mobile" className="right">
            {/* <li><a href="/">Login with Google</a></li>
            <li><a href="/">Components</a></li>
            <li><a href="/">JavaScript</a></li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps)(Header);