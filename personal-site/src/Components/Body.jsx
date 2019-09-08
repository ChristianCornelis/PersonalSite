import React from 'react';
import * as aafc from '../Content/AAFC';
import * as tulip from '../Content/Tulip';
import * as magnet from '../Content/Magnet';

export default class Body extends React.Component {
    state = {};
    //TODO grab react router prop types
    // static propTypes = {
    //     introduction: PropTypes.string.isRequired,
    //     employerInformation: PropTypes.string.isRequired,
    //     jobDescription: PropTypes.string.isRequired,
    //     goals: PropTypes.array.isRequired,
    //     conclusion: PropTypes.string.isRequired,
    //     acknowledgements: PropTypes.string.isRequired
    // };

    render() {
        let info = {};
        switch (this.props.location.pathname) {
            case "/aafc":
                info = {
                    introduction: aafc.introduction,
                    employerInformation: aafc.employerInformation,
                    jobDescription: aafc.jobDescription,
                    goals: aafc.goals,
                    conclusion: aafc.conclusion,
                    acknowledgements: aafc.acknowledgements
                };
                break;
            case "/tulip":
                info = {
                    introduction: tulip.introduction,
                    employerInformation: tulip.employerInformation,
                    jobDescription: tulip.jobDescription,
                    goals: tulip.goals,
                    conclusion: tulip.conclusion,
                    acknowledgements: tulip.acknowledgements
                };
                break;
            case "/magnet":
                info = {
                    introduction: magnet.introduction,
                    employerInformation: magnet.employerInformation,
                    jobDescription: magnet.jobDescription,
                    goals: magnet.goals,
                    conclusion: magnet.conclusion,
                    acknowledgements: magnet.acknowledgements
                };
                break;
            default:
                info = {};
        }
        const goals = info.goals.map((goal, g) => (<div key={g}>{goal}<br/><br/></div>));
        return (
            <div style={{textAlign: "left", padding: "10px", color: "white"}}>
                <br/>
                <h2 style={{textAlign: "center"}}>Introduction</h2>
                <div>{info.introduction}</div><br/>
                <h2 style={{textAlign: "center"}}>Employer Information</h2>
                <div>{info.employerInformation}</div><br/>
                <h2 style={{textAlign: "center"}}>Job Description</h2>
                <div>{info.jobDescription}</div><br/>
                <h2 style={{textAlign: "center"}}>Goals</h2>
                <div>{goals}</div>
                <h2 style={{textAlign: "center"}}>Conclusion</h2>
                <div>{info.conclusion}</div><br/>
                <h2 style={{textAlign: "center"}}>Acknowledgements</h2>
                <div>{info.acknowledgements}</div><br/>
            </div>
        )
    }
}
