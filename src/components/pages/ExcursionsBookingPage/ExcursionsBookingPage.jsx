import React from "react";

const ExcursionsBookingPage = () => {

    const init = function () {
        var d = document;
        var w = window;

        function l() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://bidbip.ru/widget/app.js';
            s.charset = 'UTF-8';
            var ss = document.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(s, ss);
        }

        if (d.readyState == 'complete') {
            l();
        } else {
            if (w.attachEvent) {
                w.attachEvent('onload', l);
            } else {
                w.addEventListener('load', l, false);
            }
        }
    };

    React.useEffect(() => init(), []);

    return (
        <div style={{marginTop: '180px'}}>
            <div id='BidBipShowcase' data-wid='149' data-key='0bf12f821b2347dfea3c84b09eaf25' data-showcaseid='58'/>
        </div>
    )
}

export default ExcursionsBookingPage;