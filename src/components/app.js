import React from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const App = () => {
  const [selectedHouse, setSelectedHouse] = React.useState(null);

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };

  return (
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouseWrapper} />
      )}
    </>
  );
};

export default App;
