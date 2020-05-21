import React from 'react';

import SelfManagedTable from './Tables/SelfManagedTable';
import StoreDrivenTable from './Tables/StoreDrivenTable';
import HostManagedTable from './Tables/HostManagedTable';

export default props => {
    const { selfManagedData, ...otherProps } = props;

    return typeof props.tableData === 'function' ? 
        <HostManagedTable {...otherProps} /> : 
        selfManagedData ? <SelfManagedTable {...otherProps} /> : <StoreDrivenTable {...otherProps} />;
};
