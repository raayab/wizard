import React from 'react';
import SupplierInfo from './SupplierInfo';
import CompanyContact from './CompanyContact';
import '../../css/PersonalInfo.css';

export default function PersonalInfo() {

    return (
        <div className="personal_info">
            <SupplierInfo />
            <CompanyContact />
        </div>
    );
}

