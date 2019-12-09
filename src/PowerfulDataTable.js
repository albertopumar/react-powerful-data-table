import React from 'react';

import SelfManagedTable from './Tables/SelfManagedTable';
import StoreDrivenTable from './Tables/StoreDrivenTable';

export default props => {
    const { selfManagedData, ...otherProps } = props;

    return selfManagedData ? <SelfManagedTable {...otherProps} /> : <StoreDrivenTable {...otherProps} />;
};
