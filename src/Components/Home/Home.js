import { React } from "react";
import "./home.sass";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dropdown from "../Dropdows/Dropdowns";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <main id="main">
        <div className="container">
          <div className="main_cont">
            <div>
              <h1 className="main_cont__title">I have to wake up at...</h1>
              <Dropdown />
              <button className="btn">
                <NavLink to="/not_now">Calculate</NavLink>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;