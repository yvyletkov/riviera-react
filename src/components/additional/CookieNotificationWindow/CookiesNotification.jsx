import React from "react";
import "./purecookie.css";

const CookiesNotification = () => {

    function pureFadeIn(elem, display) {
        let el = document.getElementById(elem);
        el.style.opacity = 0;
        el.style.display = display || "block";

        (function fade() {
            let val = parseFloat(el.style.opacity);
            if (!((val += .02) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };

    function pureFadeOut(elem) {
        var el = document.getElementById(elem);
        el.style.opacity = 1;

        (function fade() {
            if ((el.style.opacity -= .02) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    function cookieConsent() {
        if (!getCookie('purecookieDismiss')) {
            pureFadeIn("cookieConsentContainer");
        }
    }

    function purecookieDismiss() {
        setCookie('purecookieDismiss', '1', 7);
        pureFadeOut("cookieConsentContainer");
    }

    React.useEffect( () => cookieConsent(), [cookieConsent])


    return <div id='menu'>
        <div className="cookieConsentContainer" id="cookieConsentContainer">
            <div className="cookieTitle">
                <a>Cookies 🍪</a>
            </div>
            <div className="cookieDesc">
                <p>Пользуясь настоящим веб-сайтом, Вы даете свое согласие на использование
                файлов cookie (нужны для повышения стабильности сайта)</p>
            </div>
            <div className="cookieButton">
                <a onClick={() => purecookieDismiss()}>ОК</a></div>
        </div>
    </div>
}

export default CookiesNotification;