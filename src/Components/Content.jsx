
import React from 'react';
import { Steps } from 'primereact/steps';
import ApplicantsForm from './ApplicantsForm';
import { useState } from 'react';

export default function Content() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
        }
    ];

    const nextCounter = () => {
        if(activeIndex < items.length - 1) {
            setActiveIndex(activeIndex+1);
        }
    }

    const previousCounter = () => {
        if(activeIndex > 0) {
            setActiveIndex(activeIndex-1);
        }
    }

    return (
        <div className="card my-10">
            <Steps model={items}  activeIndex={activeIndex} />
            <h2 className='text-center mt-10 text-2xl font-bold'>Personal Information</h2>
            <ApplicantsForm nextCounter={nextCounter} previousCounter={previousCounter} activeIndex={activeIndex} />
        </div>
    )
}
