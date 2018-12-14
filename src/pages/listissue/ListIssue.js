import React from 'react';
import './ListIssue.css';
import HeaderLogin from '../../containers/headers/HeaderLogin';
import Footer from '../../containers/footer/Footer';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Cached from '@material-ui/icons/Cached'

class ListIssue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: "1",
                title: "hello ",
                assignee: "manh",
                priority: "Hign",
                status: "In Progress",
                date: "dadad"
            },
            {
                id: "2",
                title: "hello w",
                assignee: "manh",
                priority: "Hign",
                status: "In Progress",
                date: "dadad"
            }
            ]
        }
    }

    handleSearch = (event) => {
        
    }

    render() {
        const listIssue = this.state.list.map((issue) => {
            return (
                <div className="table-issue">
                    <div id="undisplay">Id: </div>
                    <div className="id">{issue.id}</div>
                    <div id="undisplay">Title: </div>
                    <div className="Title">{issue.title}</div>
                    <div id="undisplay">Update at: </div>
                    <div className= "view"><a href="">view</a></div>
                    <div className="update">{issue.date}</div>
                    <div id="undisplay">Status: </div>
                    <div className="status">{issue.status}</div>
                    <div id="undisplay">Priority: </div>
                    <div className="priority">{issue.priority}</div>
                    <div id="undisplay">Assignee: </div>
                    <div className="assignee">{issue.assignee}</div>
                </div>
            );
        });
        return (
            <div style={{height: "100vh"}}>
                <HeaderLogin />
                <div className="main">
                    <div style={{ color: "blue", fontSize: "30px", padding: "20px" }}>Project A > List Issue</div>
                    <div className="form">
                        <div className="search">
                            <TextField
                                variant="outlined"
                                value={this.state.memberform}
                                multiline
                                fullWidth
                                rowsMax={1}
                                style={{ padding: "10px", height: "50px" }}
                                onChange={this.handleSearch}
                            />
                        </div>
                        <div className="form-select">
                            <div className="form-status">
                                <div className="select">
                                    <FormControl variant="filled">
                                        <Select
                                            native
                                            name="status"
                                            className="option"
                                        >
                                            <option value={0}>All</option>
                                            <option value={1}>New</option>
                                            <option value={2}>In progress</option>
                                            <option value={3}>Release</option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="title">Status</div>
                            </div>
                            <div className="form-priority">
                                <div className="select">
                                    <FormControl variant="filled">
                                        <Select
                                            native
                                            name="priority"
                                            className="option"
                                        >
                                            <option value={0}>All</option>
                                            <option value={1}>No</option>
                                            <option value={2}>Low</option>
                                            <option value={3}>Normal</option>
                                            <option value={3}>High</option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="title">Priority</div>
                            </div>
                        </div>
                    </div>
                    <div className="table-title">
                        <div className="id" id="display">Id</div>
                        <div className="Title" id="display">Title</div>
                        <div className= "view" id="display">View</div>
                        <div className="update" id="display">Update at</div>
                        <div className="status" id="display">Status</div>
                        <div className="priority" id="display">Priority</div>
                        <div className="assignee" id="display">Assignee</div>
                    </div>
                    {listIssue}
                </div>
            </div>
        );
    }
}

export default ListIssue;
