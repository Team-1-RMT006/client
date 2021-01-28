import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/concert.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Creativent</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("../assets/img/fog-low.png").default} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../assets/img/fog-low.png").default} />
              </div> */}
            </div>
            <h5 className="presentation-subtitle text-center">
            Creativent is where event organizers and event lovers meet. Book your tickets and enjoy secured transaction. Managing your events has never been this easy. Scan your code and have fun!!
            </h5>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default LandingPageHeader;