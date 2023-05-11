import React from "react";
import loadingStatus from "@/helpers/loadingStatus";

const useGetRequest = (url) => {
  const [loading, setLoading] = React.useState(loadingStatus.isLoading);

  const get = React.useCallback(async () => {
    setLoading(loadingStatus.isLoading);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(loadingStatus.loaded);
      return result;
    } catch (error) {
      setLoading(loadingStatus.hasErrored);
    }
  }, [url]);

  return { get, loading };
};

export default useGetRequest;
