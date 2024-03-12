import React, { useEffect } from "react";

const ScrollToBottomDetector = ({ onScrollToBottom }) => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      console.log(scrollTop, scrollHeight, clientHeight);
      // Check if the user has scrolled to the bottom of the page
      if (Math.floor(scrollHeight - scrollTop) === clientHeight) {
        // Execute the function when the bottom of the page is reached
        onScrollToBottom();
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollToBottom]);

  return <></>; // This component doesn't render anything visible
};

export default ScrollToBottomDetector;
