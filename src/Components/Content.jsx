
import React from 'react';
import { Steps } from 'primereact/steps';
import ApplicantsForm from './ApplicantsForm';
import { useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';

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
        if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    }

    const previousCounter = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    }

    const valueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };


    return (
        <div className="card my-10">
            <Steps model={items} activeIndex={activeIndex} />
            <h2 className='text-center mt-10 text-2xl font-bold'>Personal Information</h2>
            <ApplicantsForm nextCounter={nextCounter} previousCounter={previousCounter} activeIndex={activeIndex} />
            
            <ProgressBar value={(activeIndex + 1) * 25} displayValueTemplate={valueTemplate}></ProgressBar>

        </div>
    )
}
