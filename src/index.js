import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from "./components/additional/ScrollToTop";
import {BrowserRouter} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import * as Sentry from "@sentry/browser";

if (process.env.NODE_ENV === 'production') {
    Sentry.init({dsn: "https://5f0e5e566d534042b1bb24da7c2c4abf@siem.upro.group/2"});
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter >
            <ScrollToTop>
                <SimpleReactLightbox>
                    <App/>
                </SimpleReactLightbox>
            </ScrollToTop>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
