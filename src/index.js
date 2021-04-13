import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from "./components/additional/ScrollToTop";
import {BrowserRouter} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import * as Sentry from "@sentry/browser";

if (process.env.NODE_ENV === 'production') {
    Sentry.init({dsn: "https://d3f3fcbeccfd4348b0ccda9be82f78f0@siem.upro.group/1"});
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
