// css reset
import "../styles/reset.css"

// css global
import "../styles/globals.css";

// home page
import "../styles/index.css";

import "../styles/footer.css";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />  
    </>   
  );
}

export default MyApp;
