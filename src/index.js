import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from "./components/additional/ScrollToTop";
import {BrowserRouter} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop>
                <SimpleReactLightbox>
                    <App/>
                </SimpleReactLightbox>
            </ScrollToTop>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
