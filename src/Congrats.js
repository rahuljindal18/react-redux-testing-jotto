import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {Object} props - component props
 * @returns {JSX.Element} - Rendered component or null(id `success` prop is not provided)
 */
const Congrats = (props) => {
    if(props.success){
        return(
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="component-message">Congratulations! you guessed the word.</span>
            </div>
        )
    }
    return(
        <div data-test="component-congrats"></div>
    )
}

export default Congrats;

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}