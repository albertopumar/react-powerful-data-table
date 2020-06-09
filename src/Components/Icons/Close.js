import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default () => (
    <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle' } }}>
        <IoMdClose />
    </IconContext.Provider>
);
