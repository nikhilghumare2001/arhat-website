// ============================================================
// IMPORT MAIN HOME PAGE
// ============================================================

// Home.jsx contains all the main sections of the Arhat website,
// such as Navbar, Hero Slider, About, Services, Products,
// Partners, Contact, Footer, etc.

import Home from "./pages/Home";


// ============================================================
// APP COMPONENT
// ============================================================

// App is the main component of our React application.
//
// It loads the Home page when the website starts.

function App() {

  return <Home />;

}


// ============================================================
// EXPORT APP
// ============================================================

// Export App so that main.jsx can load it.

export default App;