import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      // console.log("You are offline");
      setOnlineStatus(false);
    });

    window.addEventListener(
      "online",
      () => {
        // console.log("You are online");
        setOnlineStatus(true);
      },
      []
    );
  });

  //retuening a boolean value
  return onlineStatus;
};

export default useOnlineStatus;
