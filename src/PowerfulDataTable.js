import React from 'react';

import SelfManagedTable from './SelfManagedTable';
import StoreDrivenTable from './StoreDrivenTable';

export default props => {
    const { selfManagedData, ...otherProps } = props;

    return selfManagedData ? <SelfManagedTable {...otherProps} /> : <StoreDrivenTable {...otherProps} />;
};
