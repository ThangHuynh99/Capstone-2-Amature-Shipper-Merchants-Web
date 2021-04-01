import React from "react";
import PropTypes from "prop-types";
import TheNightOwl from "../../assets/media/the-night-owl.png";
import { Link  } from 'react-router-dom';

MenuHomePage.propTypes = {
  
};

function MenuHomePage(props) {
  return (
      <aside className="aside aside-left d-flex flex-column">
        <header className="d-flex flex-column align-items-center flex-column-auto py-9">
          <div>
            <img src={TheNightOwl} alt="logo" width={48} />
          </div>
        </header>
        <nav className="d-flex flex-column align-items-center flex-column-fluid pb-10 scroll ps">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/profile"> <a
                className="nav-link btn btn-icon btn-lg btn-borderless active"
              >
                <i className="fad fa-home-lg-alt" />
              </a></Link>
            </li>
            <li className="nav-item mb-2">
              <a
                href="chat.html"
                className="nav-link btn btn-icon btn-lg btn-borderless"
              >
                <i className="fad fa-comments-alt" />
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="statistic.html"
                className="nav-link btn btn-icon btn-lg btn-borderless"
              >
                <i className="fad fa-chart-pie" />
              </a>
            </li>
          </ul>
        </nav>
        <footer className="d-flex flex-column align-items-center flex-column-auto py-8">
          <a href="#" className="nav-link btn btn-icon btn-lg btn-borderless">
            <span>
              <i className="fad fa-question-circle" />
            </span>
          </a>
        </footer>
      </aside>
  );
}

export default MenuHomePage;
