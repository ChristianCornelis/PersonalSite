import React from 'react';
import PropTypes from 'prop-types';
export default class Body extends React.Component {
    static propTypes = {
        introduction: PropTypes.string.isRequired,
        employerInformation: PropTypes.string.isRequired,
        jobDescription: PropTypes.string.isRequired,
        goals: PropTypes.array.isRequired,
        conclusion: PropTypes.string.isRequired,
        acknowledgements: PropTypes.string.isRequired
    };

    render() {
        console.log(this.props.goals);

        const goals = this.props.goals.map((goal, g) => (<div>{goal}<br/><br/></div>));
        return (
            <div style={{textAlign: "left", padding: "50"}}>
                <h2 style={{textAlign: "center"}}>Introduction</h2>
                <div>{this.props.introduction}</div><br/>
                <h2 style={{textAlign: "center"}}>Employer Information</h2>
                <div>{this.props.employerInformation}</div><br/>
                <h2 style={{textAlign: "center"}}>Job Description</h2>
                <div>{this.props.jobDescription}</div><br/>
                <h2 style={{textAlign: "center"}}>Goals</h2>
                <div>{goals}</div>
                <h2 style={{textAlign: "center"}}>Conclusion</h2>
                <div>{this.props.conclusion}</div><br/>
                <h2 style={{textAlign: "center"}}>Acknowledgements</h2>
                <div>{this.props.acknowledgements}</div><br/>
            </div>
        )
    }
}
