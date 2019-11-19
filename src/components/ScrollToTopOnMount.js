import {useEffect} from 'react';

//with React Link if you scroll on one page and navigate somewhere else
//then you will be in a scrolled location on that new page
//this is helper component from the react docs to scroll to top of page automatically
//place in any component that we want to scroll to top on change. Notes and BlogEntry component here
const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnMount;