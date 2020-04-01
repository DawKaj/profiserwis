import React from 'react';
import { Link } from 'gatsby';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ax: 0.01,
      ay: 0.01,
      x: 0,
    };
    this._onMouseMove = this._onMouseMove.bind(this);
  }

  _onMouseMove = e => {
    this.setState({
      ax: -(window.innerWidth / 2 - e.pageX) / 20,
      ay: (window.innerHeight / 2 - e.pageY) / 20,
      x: window.innerWidth,
    });
  };

  render() {
    const { ax, ay, x } = this.state;
    let xx = false;
    if (x > 968) {
      xx = true;
    }
    return (
      <div onMouseMove={this._onMouseMove} className="container">
        <div className="home">
          <div
            className="perspective-card"
            style={
              xx
                ? {
                    transform: `rotateY(${ax}deg) rotateX(${ay}deg) translateZ(100px)`,
                  }
                : {}
            }
          >
            <div className="perspective-card">
              <div className="perspective-card-content">
                <p>jesteśmy polską</p>
                <Link to="onas">firmą inżynierską</Link>
                <p>z 10-letnim doświadczeniem w branży</p>
                <p>
                  <Link to="automatyka">automatyki przemysłowej</Link>
                </p>
                <p>zajmujemy się kompleksową obsługą firm </p>
                <p>
                  <Link to="utrzymanie_ruchu">produkcyjnych</Link>
                </p>
                <p>
                  <Link to="instalatorzy">i instalacyjnych</Link>
                </p>
                <p>w zakresie</p>
                <Link to="">projektowania,</Link>
                <Link to="">prefabrykacji</Link>
                <p>oraz</p>
                <Link to="">dostaw</Link>
                <p>akcesoriów elektrotechnicznych</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
