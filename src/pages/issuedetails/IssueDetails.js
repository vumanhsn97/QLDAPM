import React from 'react';
import HeaderLogin from '../../containers/headers/HeaderLogin';
import Footer from '../../containers/footer/Footer';
import './IssueDetails.css'

class IssueDeatails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "Description is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes. As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details; it is bringing something to life by carefully choosing and arranging words and phrases to produce the desired effect.",
            title: "Title here",
            owner: "vumanh",
            status: "heleu",
            start: "12-02-2007",
            priority: "Hellu",
            due: "13-06-2008",
            assignee: "hihi",
            estimate: 23
        }
    }
    render() {
        return (
            <div style={{height: "100vh"}}>
                <div style={{ padding: "0px 30px" }}>
                    <div className="issue-container">
                        <div style={{ color: "blue", fontSize: "30px", padding: "20px" }}>Project A > Issue B</div>
                        <div className="is-title">
                            <div className="is-label">
                                Title
                            </div>
                            <div className="title-textfield  is-detail-text">
                                {this.state.title}
                            </div>
                        </div>
                        <div className="is-description">
                            <div className="is-label description-label">Description</div>
                            <div className="description-textfield is-detail-text">
                                {this.state.description}
                            </div>
                        </div>
                        <div className="is-owner">
                            <div className="is-label">Owner</div>
                            <div className="owner-textfield is-detail-text">
                                {this.state.owner}
                            </div>
                        </div>
                        <div className="is-form">
                            <div className="label-left">
                                <div className="is-form-label">Status</div>
                                <div className="is-form-input is-detail-text">
                                    {this.state.status}
                                </div>
                            </div>
                            <div className="label-right">
                                <div className="is-form-label">Start date</div>
                                <div className="is-form-input is-detail-text">
                                    {this.state.start}
                                </div>
                            </div>
                        </div>
                        <div className="is-form">
                            <div className="label-left">
                                <div className="is-form-label">
                                    Priority
                                </div>
                                <div className="is-form-input is-detail-text">
                                    {this.state.priority}
                                </div>
                            </div>
                            <div className="label-right">
                                <div className="is-form-label">
                                    Due date
                                </div>
                                <div className="is-form-input is-detail-text">
                                    {this.state.due}
                                </div>
                            </div>
                        </div>
                        <div className="is-form">
                            <div className="label-left">
                                <div className="is-form-label">
                                    Assignee
                                </div>
                                <div className="is-form-input is-detail-text">
                                    {this.state.assignee}
                                </div>
                            </div>
                            <div className="label-right">
                                <div className="is-form-label">
                                    Estimate
                                </div>
                                <div className="is-form-input is-detail-text">
                                    {this.state.estimate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default IssueDeatails;
