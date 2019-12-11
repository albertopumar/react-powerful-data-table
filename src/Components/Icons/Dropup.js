import React from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default () => (
    <IconContext.Provider value={{ size: '1.5em', className: 'order-icon_desc', style: { verticalAlign: 'middle' } }}>
        <IoMdArrowDropup />
    </IconContext.Provider>
);
