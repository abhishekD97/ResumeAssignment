import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Footer from "./footer";
import Projects from "./projects";
import Header from "./header";
import Feedback from "./feedback";
import Resume from "./resume";



function App(){

    return (
        <div>
        <Router>
        {/*------------------------------HEADER----------------------------------------*/}
                <Header/>
        {/*------------------------------BODY----------------------------------------*/}
                <Route path="/resume" exact component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/feedback" component={Feedback} />
        {/*------------------------------FOOTER----------------------------------------*/}
                <Footer/>
        </Router>
        </div>
        
    );
}
export default App;