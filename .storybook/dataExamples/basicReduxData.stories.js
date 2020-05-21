import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../demo-data';

import text from './basicReduxData.md';

const tableStructure = [
    { title: 'Identificador', field: 'id' },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

/** TYPES */
const SET_ACTIVITIES = 'SET_ACTIVITIES';
const SET_FILTER = 'SET_FILTER';
const SET_PAGE = 'SET_PAGE';
const SET_ORDER = 'SET_ORDER';
const RESET_QUERY = 'RESET_QUERY';

/** ACTIONS */
const setActivities = activities => ({
    type: SET_ACTIVITIES,
    payload: activities
});

const onFilterChanged = (key, value) => ({
    type: SET_FILTER,
    payload: { key, value }
});

const onPageChanged = page => ({
    type: SET_PAGE,
    payload: page
});

const onOrderChanged = order => ({
    type: SET_ORDER,
    payload: order
});

const resetQuery = () => ({
    type: RESET_QUERY
});

const actions = {
    setActivities,
    onFilterChanged,
    onPageChanged,
    onOrderChanged,
    resetQuery
};

/** REDUCERS */
const activityReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ACTIVITIES:
            return payload;

        default:
            return state;
    }
};

const queryReducerInitialState = {
    filters: {},
    order: {},
    page: 0
};

const queryReducer = (state = queryReducerInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_FILTER:
            return {
                ...state,
                page: 0,
                filters: { ...state.filters, [payload.key]: payload.value }
            };

        case SET_ORDER:
            return {
                ...state,
                order: { ...state.order, ...payload }
            };

        case SET_PAGE:
            return {
                ...state,
                page: payload
            };
        case RESET_QUERY:
            return queryReducerInitialState;
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        data: activityReducer,
        query: queryReducer
    })
);

/** COMPONENT */
class ReactTableComponent extends React.Component {
    componentDidMount() {
        this.props.setActivities(demoData.slice(0, 5));
    }

    render() {
        console.log(this.props);
        return ( 
            <ReactTable
                tableStructure={tableStructure} 
                tableData={this.props.data}
                pagination={this.props.pagination}
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
            text
        }
    }
};
