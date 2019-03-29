import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import './App.css';

/* 
  If we want to build our site with all functional components 
  and use the latest in React Hooks, we achieve that in our AppContext component.
*/

/* In our App Component we just need to import the AppProvider */
/* useState, useContext, useMediaPredicate */
import { AppProvider, AppContext } from "./AppContext";

/* View Components */
import Home from './view-components/Home';
import Destinations from './view-components/Destinations';
import Contact from './view-components/Contact';


/* navigation Components*/
import SideNav from './partial-components/Sidenav';
import TopNav from './partial-components/Topnav';

const App = () => {
  // We could also put all of our state right here without a provider and pass down through props
  // This would be harder once it came to updating our state IMHO.

  // We add the check for MediumPlus at the App level 
  // and we append it to the class: `app-conainter`
  let isMediumPlus = useMediaPredicate("(min-width: 600px)") ? false : true;

  return (
    <AppProvider>
      <BrowserRouter>
        <div className={`app-container ${!isMediumPlus ? 'medium' : 'small'}`}>
          <div className="view">

            <header>
              <div className="logo">
                <span>LOGO</span>
              </div>
              <TopNav />
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/destinations" component={Destinations} />
                <Route exact path="/contact" component={Contact} />
                <Route render={() => <h2 className="four-o-four">404 Page Not Found</h2>} />
              </Switch>
            </main>

            <footer>
              <p>This is footz</p>
            </footer>

          </div>
          <SideNav />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;