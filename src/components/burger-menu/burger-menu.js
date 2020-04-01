import React from 'react';
import { Link } from 'gatsby';

import BurgerIcon from './burger-icon';

import dataImage from '../../data/images';
import ArrowIcon from '../../assets/icon/arrow-icon.svg';
import { route } from '../../data/routs';

class BurgerMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      activeLink: null,
      isEnter: !1,
      isOpen: !1,
    };
  }

  setOpen = () => this.setState({ isOpen: !this.state.isOpen });
  hide = () => this.setState({ open: !1 });

  createImage(props) {}

  render() {
    return (
      <>
        <div className="header-component">
          <nav>
            <div className="logo">
              <Link to="/">
                <h4>Profi Serwis</h4>
              </Link>
            </div>
            <div className="">
              <BurgerIcon isOpen={this.setOpen} />
            </div>
          </nav>
        </div>
        <div className={`menu${this.state.isOpen ? ' open' : ''}`}>
          <div className="menu-container">
            <div className="menu-content">
              <ul className="link">
                {route.map((v, i) => {
                  if (v.label !== 'Home') {
                    return (
                      <li
                        onMouseEnter={() =>
                          this.setState({ enter: true, activeLink: i })
                        }
                        onMouseLeave={() =>
                          this.setState({ enter: false, activeLink: null })
                        }
                        key={i}
                        className={
                          this.state.enter
                            ? this.state.activeLink === i
                              ? ' active '
                              : ' unactive '
                            : ''
                        }
                      >
                        <div className="icon">
                          <img src={ArrowIcon} alt="" />
                        </div>
                        <Link to={v.path} className="">
                          <span>{v.label}</span>
                          <span>{v.subtitle}</span>
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="menu-image">
              {dataImage.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={`slide-wrapper`}
                    // style={ { this.state.activeLink === i + 1 ? 'zIndex: 3' : `` } }
                    style={{
                      width: this.state.activeLink === i + 1 ? `100%` : `0`,
                    }}
                  >
                    <div className="slide">
                      <img src={v} alt="" style={{ height: `100%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BurgerMenu;
