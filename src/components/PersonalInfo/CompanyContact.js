import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    toolTipWidth: {
        maxWidth: '278px',
        backgroundColor: '#fff',
        color: 'black',
        wordWrap: 'break-word',
        whiteSpace: "normal",
        'box-shadow': '0 0 32px 14px rgba(29, 86, 158, 0.1)'
      }
    

  }));
export default function CompanyContact() {
    const toolTipText = `
    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן
     - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
     אודיפו בלאסטיק מונופץ קליר, בנפת נפקט.
     למסון בלרק - וענוף הועניב היושבב שערש שמחויט 
     `;

     const classes = useStyles();

    return (
        <div className="section_head company_contact">
            פרטי איש קשר בחברה
            <div className="full_name ">
                <div className="detail">שם מלא</div>
                <input  />
            </div>
            <div className="id">
                <div className="detail">ת"ז</div>
                <input  />
            </div>
            <div className="email">
                <div className="detail">כתובת דוא"ל
                    <Tooltip className="tool_tip" title={toolTipText} placement="bottom-end" classes={{tooltip : classes.toolTipWidth}}>
                        <HelpOutlineIcon/>
                    </Tooltip>
                </div>
                <input/>
            </div>
            <div className="mobile_phone">
                <div className="detail">מספר טלפון נייד</div>
                <input  />
            </div>
            <div className="phone">
                <div className="detail">מספר טלפון נוסף (אופציונלי)</div>
                <input  />
            </div>
            <div className="fax">
                <div className="detail">מספר פקס (אופציונלי)</div>
                <input  />
            </div>
        </div>
    );
}
