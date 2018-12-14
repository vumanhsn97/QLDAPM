import React from 'react';
import HeaderLogin from '../../containers/headers/HeaderLogin';
import Footer from '../../containers/footer/Footer';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

class UpdateIssue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Title is here",
            description: "This is description",
            owner: "This is owner",
            status: "This is status",

        }
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value })
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
                            <div className="title-textfield">
                                <TextField
                                    rows="1"
                                    multiline
                                    variant="outlined"
                                    style={{ height: "40px" }}
                                />
                            </div>
                        </div>
                        <div className="is-description">
                            <div className="is-label">Description</div>
                            <div className="description-textfield">
                                <TextField
                                    multiline
                                    className="description-size"
                                    rows="6"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                        <div className="is-owner">
                            <div className="is-label">Owner</div>
                            <div className="owner-textfield">
                                <TextField
                                    multiline
                                    variant="outlined"
                                    rows="1"
                                    style={{ height: "40px" }}
                                />
                            </div>
                        </div>
                        <div className="is-form">
                            <div className="label-left">
                                <div className="is-form-label">Status</div>
                                <div className="is-form-input">
                                    <FormControl variant="filled">
                                        <Select
                                            native
                                            name="status"
                                            style={{ width: "200px" }}
                                        >
                                            <option value="" />
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="label-right">
                                <div className="is-form-label">Start date</div>
                                <div className="is-form-input">
                                    <TextField
                                        type="date"
                                        defaultValue="2017-05-24"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="is-form">
                            <div className="label-left">
                                <div className="is-form-label">
                                    Priority
                                </div>
                                <div className="is-form-input">
                                    <FormControl variant="filled">
                                        <Select
                                            native
                                            name="priority"
                                            style={{ width: "200px" }}
                                        >
                                            <option value="" />
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="label-right">
                                <div className="is-form-label">
                                    Due date
                                </div>
                                <div className="is-form-input">
                                    <TextField
                                        type="date"
                                        defaultValue="2017-05-24"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="is-form">
                            <div className="label-left">
                                <div className="is-form-label">
                                    Assignee
                                </div>
                                <div className="is-form-input">
                                    <FormControl variant="filled">
                                        <Select
                                            native
                                            name="assignee"
                                            style={{ width: "200px" }}
                                        >
                                            <option value="" />
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="label-right">
                                <div className="is-form-label">
                                    Estimate
                                </div>
                                <div className="is-form-input">
                                    <TextField
                                        type="text"
                                        multiline
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '107px', margin: "auto" }}>
                            <Button style={{ margin: "20px 0px 50px 0px", backgroundColor: "blue", color: "white" }}>
                                <ArrowDropUp />
                                update
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UpdateIssue;
