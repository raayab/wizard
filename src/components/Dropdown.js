import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    item: {
        width: 44,
        height: 73,
        opacity: 0.8,
        color: '#2a3640',
        fontFamily: 'Assistant',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 30,
    },
    dropdown: {
        width: 380,
        height: 39,
        border: '0px',
        opacity: 0.8,
        color: '#2a3640',
        fontFamily: 'Assistant',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 54.14,
    }
}));
export default function SupplierInfo(props) {
    const classes = useStyles();
    const list = []
    list.push(<option key="placeholder" className={classes.item} value="origin">{props.placeholder}</option>);
    props.list.map(item=>
        list.push(<option key={item} className={classes.item} value={item}>{item}</option>)
    );
    return (
        <select className={classes.dropdown}>
        {list}
        </select>
    );
}