import Header from "./Header"
import Desktop from "./Desktop"
import Footer from "./Footer"
import './earth.css'

function App() {
  return (
    <>
      <meta content="True" name="HandheldFriendly" />
      <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=none;" />
      <meta name="viewport" content="width=device-width"></meta>
    {/*<div class="loader-body">
        <span class="earth"></span>
      </div> 
    */} 
    <Header />
        <Desktop />
    <Footer />

    </>
  );
}

export default App;



