import React from 'react';
import ContactForm from "./ContactForm";
import Rodal from 'rodal';

const PopupContactForm = ({popupOpen, setPopupOpen, popupTitleText, submitBtnText, formName, withEmail, withPhone, withMessage, textAreaPlaceholder, swalText}) => {
    return (
        <Rodal className={'rodal-popup'} visible={popupOpen} onClose={() => setPopupOpen(false)}>
            <p style={{maxWidth: "100%"}}>
                {popupTitleText}
            </p>
            <ContactForm submitBtnText={submitBtnText}
                         formName={formName}
                         withEmail={withEmail}
                         withPhone={withPhone}
                         swalText={swalText}
                         withMessage={withMessage}
                         textAreaPlaceholder={textAreaPlaceholder}/>
        </Rodal>)
};

export default PopupContactForm;
