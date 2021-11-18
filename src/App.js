import React from "react";
import "./App.css";



const App=()=> {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="http://aboutcars-ac.ru/wp-content/uploads/2014/10/bardelli-Italiya.jpg"></img>
                
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
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
