import React, {useEffect} from 'react';


const BookingPage = () => {
    useEffect(() => {
        window.tlBooking(window)
    }, []);

    return (
        <section>
            <div style={{margin: "120px 0 50px"}} id="tl-booking-form"/>
        </section>

    )
}

export default BookingPage;
