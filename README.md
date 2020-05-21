# react-powerful-data-table

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/albertopumar/react-powerful-data-table/blob/master/LICENSE) [![npm version](https://img.shields.io/badge/npm-v0.0.1-blue)](https://www.npmjs.com/package/react-powerful-data-table)

# Description

Data table component for [ReactJS](https://es.reactjs.org/) developed to create default tables extremely quickly but also allowing an infinite customization.

# Table of content

-   [Installation](#Installation)
-   [Usage](#Usage)
-   [Documentation](#Documentation)
-   [License](#License)

# Installation

Installation using `npm`

    npm install react-powerful-data-table --save

# Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-powerful-data-table';

const structure = [
    { title: 'Identifier', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' }
];

const data = [
    { id: 1, name: 'John', surname: 'Doe' },
    { id: 2, name: 'Baby', surname: 'Doe' },
    { id: 3, name: 'Harry', surname: 'Hoe' },
    { id: 4, name: 'Vince', surname: 'Voe' },
    { id: 5, name: 'Joe', surname: 'Public' },
    { id: 6, name: 'William', surname: 'Woe' }
];

class App extends React.Component {
    render() {
        return <ReactTable tableData={data} tableStructure={structure} />;
    }
}
```

# Documentation

Documentation a more examples can be found in the storybook page:

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://albertopumar.github.io/react-powerful-data-table)

# License

This project is licensed under the terms of the [MIT license](https://github.com/albertopumar/react-powerful-data-table/blob/master/LICENSE).
