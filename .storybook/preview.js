import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ReactTable from '../src/PowerfulDataTable';

addDecorator(
    withInfo({
        inline:true,
        source: false,
        propTablesExclude: [ReactTable],
    })
); 