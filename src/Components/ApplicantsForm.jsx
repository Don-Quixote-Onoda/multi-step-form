
import React, { useState, useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';


export default function ApplicantsForm({ nextCounter, previousCounter, activeIndex }) {
    const toast = useRef(null);
    const [items, setItems] = useState([]);

    const [date, setDate] = useState(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
            formik.resetForm();
        }
    });

    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2" style={{ flexDirection: 'column' }}>
                {activeIndex == 0 && <div className="flex flex-column gap-2 mb-5" style={{ flexDirection: 'column' }}>
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" />
                </div>}

                {activeIndex == 1 && <div className="flex flex-column gap-2 mb-5" style={{ flexDirection: 'column' }}>
                    <label htmlFor="username">First Name</label>
                    <InputText id="username" aria-describedby="username-help" />
                    <label htmlFor="username">Last Name</label>
                    <InputText id="username" aria-describedby="username-help" />
                </div>}

                {activeIndex == 2 && <div className="flex flex-column gap-2 mb-5" style={{ flexDirection: 'column' }}>
                    <InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />
                    <InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
                    <InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
                    <InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
                </div>}

                {activeIndex == 3 && <div className="flex flex-column gap-2 mb-5" style={{ flexDirection: 'column' }}>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                </div>}

                <div className="flex" style={{ justifyContent: activeIndex > 0 ? 'space-between' : 'end' }}>
                    {activeIndex > 0 && <Button type="button" label="Back" onClick={() => previousCounter()} className="w-1/5 hidden !bg-red-500 !border-red-500 !hover:bg-red-300" />}
                    {activeIndex < 3 && <Button type="button" label="Next" onClick={() => nextCounter()} className="w-1/5 hidden !bg-red-500 !border-red-500 !hover:bg-red-300" /> }
                    {activeIndex == 3 && <Button type="submit" label="Submit" className="w-1/5 hidden"  />}
                </div>
            </form>
        </div>
    )
}
