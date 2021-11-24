import React from "react";
import "./App.css";

const App=()=> {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://www.gifservice.fr/img/gif-vignette-large/2dcd37f5acf39b4010c7d6345bc27932/11854-logo-porsche-coche-transporte.gif"></img>
                {/*https://thumbs.gfycat.com/UnderstatedCleanAsiaticgreaterfreshwaterclam-max-1mb.gif                
                https://www.gifservice.fr/img/gif-vignette-small/cc1bfa72f7e0eab4937d0ec172c9c0ae/11856-transport-cars-porsche-logo.gif*/}                
            </header>
            <nav className="nav">
                <div>
                    <a className="navLink">Profile</a>
                </div>
                <div>
                    <a className="navLink">Messages</a>
                </div>
                <div>
                    <a className="navLink">News</a>
                </div>
                <div>
                    <a className="navLink">Music</a>
                </div>
                <div>
                    <a className="navLink">Settings</a>
                </div>                
            </nav>
            <div className="content">
                <div>
                    <img src="https://a.d-cd.net/9da353u-960.jpg"></img>
                </div>
                <div>
                    ava+des
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>        
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>        

                </div>
            </div>
        </div>
    );
}
export default App;
