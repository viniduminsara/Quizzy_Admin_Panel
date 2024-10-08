import {useEffect, useState} from "react";

const DateAndTime = () => {
    const [dateTime, setDateTime] = useState({
        time: "",
        date: ""
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-US', { hour12: true });
            const formattedDate = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            setDateTime({
                time: formattedTime,
                date: formattedDate
            });
        };

        const intervalId = setInterval(updateDateTime, 1000);
        updateDateTime();

        return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, []);

    return (
        <div className='bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center py-8'>
            <h3 className='text-3xl poppins-semibold bg-gradient bg-clip-text text-transparent'>{dateTime.time}</h3>
            <h5 className='text-lg poppins-regular'>{dateTime.date}</h5>
        </div>
    )
}

export default DateAndTime;
