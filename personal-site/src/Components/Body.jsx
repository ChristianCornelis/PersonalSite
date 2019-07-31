import React from 'react';
import PropTypes from 'prop-types';
export default class Body extends React.Component {
    static propTypes = {
        introduction: PropTypes.string.isRequired,
        goals: PropTypes.array.isRequired,
        outro: PropTypes.string.isRequired
    };

    render() {
        console.log(this.props.goals);

        const goals = this.props.goals.map((goal, g) => (<div key={g}><p>{goal.goal}</p><p>{goal.measureOfSuccess}</p></div>));
        return (
            <div>
                <div>{this.props.introduction}</div>
                <div>{this.props.outro}</div>
                {goals}
            </div>
        )
    }
}
