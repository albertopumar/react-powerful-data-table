import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default () => (
    <IconContext.Provider value={{ size: '1.5em', className: 'order-icon_asc', style: { verticalAlign: 'middle', position: 'absolute' } }}>
        <IoMdArrowDropdown />
    </IconContext.Provider>
);
