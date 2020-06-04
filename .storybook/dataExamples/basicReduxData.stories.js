import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect, batch } from 'react-redux';

import ReactTable from '../../src/PowerfulDataTable';
import fetchData from '../mocks/fetchData';

import text from './basicReduxData.md';

const tableStructure = [
    { title: 'Identificador', field: 'id' },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

/** TYPES */
const SET_DATA = 'SET_DATA';
const SET_QUERY = 'SET_QUERY';
const RESET_QUERY = 'RESET_QUERY';

/** ACTIONS */
const setData = data => ({
    type: SET_DATA,
    payload: data
});

const setQuery = order => ({
    type: SET_QUERY,
    payload: order
});

const resetQuery = () => ({
    type: RESET_QUERY
});

const actions = {
    setData,
    setQuery,
    resetQuery
};

/** REDUCERS */
const dataReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_DATA:
            return payload;

        default:
            return state;
    }
};

const queryReducerInitialState = {
    filter: {},
    order: {},
    page: 0
};

const queryReducer = (state = queryReducerInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_QUERY:
            return payload;
        case RESET_QUERY:
            return queryReducerInitialState;
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        data: dataReducer,
        query: queryReducer
    })
);

/** COMPONENT */
class ReactTableComponent extends React.Component {
    componentDidMount() {
        fetchData().then(data => this.props.setData(data));
    }

    onQueryChanged = query => {
        fetchData(query).then(data => {
            batch(() => {
                this.props.setData(data);
                this.props.setQuery(query);
            });
        });
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

/** CONTAINER */
const mapStateToProps = state => ({
    data: state.data,
    query: state.query
});

const mapDispatchToProps = { ...actions };

const ConnectedReactTable = connect(mapStateToProps, mapDispatchToProps)(ReactTableComponent);

export const basicReduxData = () => 
    <Provider store={store}>
        <ConnectedReactTable />
    </Provider>;

export default { 
    title: 'Data Handle Examples',
    parameters: {
        info: {
            text,
            propTablesExclude: [Provider, ConnectedReactTable]
        }
    }
};
