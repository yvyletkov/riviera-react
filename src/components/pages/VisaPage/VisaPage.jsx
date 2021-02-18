import React, {useEffect} from 'react';

const VisaPage = () => {
    useEffect(() => {
        window.tlVisa(window);
    }, []);

    return (
        <section>
            <div id="tl-visa-form"></div>
        </section>

    )
}

export default VisaPage;
