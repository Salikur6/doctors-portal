import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentPageBanner = ({ date, setDate }) => {

    return (

        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                    <div>
                        <style>{`.rdp-head_cell { color: red }`}</style>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            fromYear={2015}
                            toYear={2035}
                            captionLayout="dropdown"
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentPageBanner;