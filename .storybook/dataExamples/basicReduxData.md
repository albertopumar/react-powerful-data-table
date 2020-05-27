## Description
Show local stored data in the table. Although we have stored all the data we only show one page at a time to help readability.

## Configuration
 - We need to pass the structure of the table as `tableStructure` parameter. An example of this parameter can be found in the example below.
 - We need to pass the `data` `Array` and `pagination` `Object` managed by `Redux`
 - We need to pass an `onQueryChanged` `function` which will be called when the `query` `Object` change and `data` needs to update.


## Example
```jsx
import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';

const tableStructure = [
    { title: 'Identifier', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' }
];

class ReactTableComponent extends React.Component {
    componentDidMount() {
        fetchData().then(data => this.props.setData(data));
    }

    onQueryChanged = query => {
        this.props.setQuery(query);
        fetchData(query).then(data => this.props.setData(data));
    };

    render() {
        const { data, ...pagination } = this.props.data;
        return ( 
            <ReactTable
                tableStructure={tableStructure} 
                tableData={data}
                pagination={pagination}
                onQueryChanged={this.onQueryChanged}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactTableComponent);
```