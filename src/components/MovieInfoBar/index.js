// Import the necessary library
import React from 'react';
import PropTypes from 'prop-types';

// Import Helpers function
import { calcTime, convertMoney } from "../../helpers";

// Import the style component
import { Wrapper, Content } from './MovieInfoBar.styles';

// Create MovieInfoBar component
const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

// Validating Props
MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}
// Export the component
export default MovieInfoBar;