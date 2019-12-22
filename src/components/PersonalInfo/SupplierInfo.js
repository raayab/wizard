import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown';
import {fetchOrigins} from '../../api/getData';

export default function SupplierInfo() {
    const [origins,setOrigins] = useState([]);
    
    useEffect(() => {
        fetchOrigins().then(res=>setOrigins(res.map(r=>r.title))).catch(e=>console.log("Fetch Failed"));
    },[]);
    
    return (
        
            <div className="section_head supplier_info">
                פרטי הספק
                <div className="supplier_name">
                    <div className="detail">שם הספק</div>
                    <input  />
                </div>
                <div className="supplier_number">
                    <div className="detail">מספר ח"פ</div>
                    <input  />
                </div>
                <div className="goods_origin">
                    <div className="detail">מקור הטובין</div>
                    
                    <div className="dd"> <Dropdown list={origins} placeholder="בחר/י מקור"/> </div>                    
                </div>
                <div className="address">
                    <div className="detail">כתובת</div>
                    <input  />
                </div>
            </div>
        );
}

