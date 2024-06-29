import React from "react";
import { TOTAL_SCREEN } from "../utilities/commonUtils";

const PortfolioContainer = () => {
  const mapAllScreen = () => {
    return TOTAL_SCREEN.map(screen =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };
  return <div className="portfolio-container">{mapAllScreen()}</div>;
};

export default PortfolioContainer;
