import React from 'react';
import ContactForm from "./ContactForm";
import Rodal from 'rodal';

const PopupContactForm = ({popupOpen, setPopupOpen, popupTitleText, submitBtnText, formName, withEmail, withPhone, swalText}) => {
    return (
        <Rodal className={'rodal-popup'} visible={popupOpen} onClose={() => setPopupOpen(false)}>
            <p style={{maxWidth: "90%"}}>
                {popupTitleText}
            </p>
            <ContactForm submitBtnText={submitBtnText}
                         formName={formName}
                         withEmail={withEmail}
                         withPhone={withPhone}
                         swalText={swalText}/>
        </Rodal>)
};

export default PopupContactForm;