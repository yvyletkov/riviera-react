import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from "./components/additional/ScrollToTop";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
