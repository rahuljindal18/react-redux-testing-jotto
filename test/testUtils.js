import checkPropTypes from 'check-prop-types';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../src/reducers/index';
import { middlewares } from '../src/configureStore';


export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer,initialState);
}

/**
 * Function to create ShallowWrapper based on data-test attribute value
 * @param {ShallowWrapper} wrapper - ShallowWrapper of the Congrats component
 * @param {String} val - data-test attribute value
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}