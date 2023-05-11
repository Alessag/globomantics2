import React from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
  const [houses, setHouses] = React.useState([]);
  const { get, loading } = useGetRequest("/api/houses");

  React.useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };

    fetchHouses();
  }, [get]);

  return { houses, setHouses, loading };
};

export default useHouses;
