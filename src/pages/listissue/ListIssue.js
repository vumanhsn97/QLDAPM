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

    render() {
        const listIssue = this.state.list.map((issue) => {
            return (
                <div>
                    <div style={{width:"100%", height: "30px"}}></div>
                    <div id="undisplay">Id: </div>
                    <div className="id">{issue.id}</div>
                    <div id="undisplay">Title: </div>
                    <div className="Title">{issue.title}</div>
                    <div id="undisplay">Update at: </div>
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
            <div>
                <HeaderLogin />
                <div style={{ padding: "0px 30px" }}>
                    <div style={{ color: "blue", fontSize: "30px", padding: "20px" }}>Project A > List Issue</div>
                    <form>
                        <div container className="main">
                            <div className="search">
                                <form>
                                    <input type="text" style={{ color: "black", border: "1px solid black" }} />
                                </form>
                            </div>
                            <div className="select">
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="status"
                                        className="option"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="title">Status</div>
                            <div className="select">
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="priority"
                                        className="option"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="title">Priority</div>
                            <div className="select">
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="assign"
                                        className="option"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="title">Assignee</div>
                            <div style={{width:"100%", height: "60px"}} id="display"></div>
                            <div className="id" id="display">Id</div>
                            <div className="Title" id="display">Title</div>
                            <div className="update" id="display">Update at</div>
                            <div className="status" id="display">Status</div>
                            <div className="priority" id="display">Priority</div>
                            <div className="assignee" id="display">Assignee</div>
                            {listIssue}
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ListIssue;
