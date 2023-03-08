
import React from 'react';

export default function Form({children}) {

    return (
        <div className="flex flex-column gap-2 mb-5" style={{ flexDirection: 'column' }}>
            {children}
        </div>
    )
}
