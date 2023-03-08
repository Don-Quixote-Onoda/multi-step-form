
import React from 'react';
import { Avatar } from 'primereact/avatar';

export default function Header() {

    return (
        <header className="App-header flex justify-betwen py-3" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="card">
                <div className="flex flex-wrap gap-5">
                    <div className="flex-auto">
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    </div>
                </div>
            </div>
            <h3>Applicants Form</h3>
        </header>
    )
}
