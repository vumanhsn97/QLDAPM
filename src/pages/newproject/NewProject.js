import React from 'react';
import './NewProject.css';
import HeaderLogin from '../../containers/headers/HeaderLogin';
import Footer from '../../containers/footer/Footer';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Clear from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import { isMobile } from 'react-device-detect';
import { array } from 'prop-types';

class NewProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            member: [],
            memberform: "",
            rule: "",
            position: 0,
        }
    }

    handleProjectName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleProjectDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    handleMemberForm = (event) => {
        this.setState({ memberform: event.target.value });
    }

    handleRuleForm = (event) => {
        this.setState({ rule: event.target.value });
    }

    addMember = () => {
        let list = this.state.member;
        list.push({ name: this.state.memberform, rule: this.state.rule });
        this.setState({ member: list, memberform: "", rule: "" });
    }

    deleteMember = (member) => {
        let list = this.state.member;
        let i = list.indexOf(member);
        list.splice(i, 1);
        this.setState({ member: list });
    }

    showMobile = () => {
        const listMember = this.state.member.map((member) =>
            <div style={{ margin: "5px 0px" }} key={member}>
                Name: {member.name} --- Rule: {member.rule}
                <Button style={{ width: "10px", marginLeft: "10px", minWidth: "30px", height: "10px", minHeight: "30px", backgroundColor: "blue", color: "white" }} onClick={() => { this.deleteMember(member) }}>
                    <Clear style={{ paddingBottom: "10px" }}></Clear>
                </Button>
            </div>
        );
        return (
            <div>
                <div className="project-container">
                    <div className="project-header">Create new project</div>
                    <div className="project-form project-name">
                        <div style={{paddingLeft: "10px", paddingBottom: "10px"}}>Your Project Name</div>
                        <div>
                            <TextField
                                variant="outlined"
                                rowsMax={1}
                                multiline
                                fullWidth
                                style={{ padding: "10px", height: "60px" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingLeft: "10px"}}>Description</div>
                        <div>
                            <TextField
                                variant="outlined"
                                multiline
                                fullWidth
                                rows="6"
                                style={{ padding: "10px", height: "150px" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingLeft: "10px", marginTop: "20px"}}>Invite member</div>
                        <div>
                            <TextField
                                variant="outlined"
                                value={this.state.memberform}
                                multiline
                                fullWidth
                                rowsMax={1}
                                style={{ padding: "10px", height: "60px" }}
                                onChange={this.handleMemberForm}
                            />
                        </div>
                        <div style={{paddingLeft: "10px", float: "left"}}>
                            <FormControl variant="filled">
                                <InputLabel>Rule</InputLabel>
                                <Select
                                    native
                                    name="rule"
                                    style={{ width: "150px" }}
                                    value={this.state.rule}
                                    onChange={this.handleRuleForm}
                                >
                                    <option value="" />
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Tester">Tester</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ paddingTop: "20px"}}>
                            <Button style={{ marginLeft: "20px", width: "10px", minWidth: "30px", height: "10px", minHeight: "30px", backgroundColor: "blue", color: "white" }} onClick={this.addMember}>
                                <Add style={{ paddingBottom: "10px" }}></Add>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <Paper style={{
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 150,
                            width: "100%",
                            height: "150px",
                            padding: '10px 20px',
                            marginTop: '20px',
                            backgroundColor: "#e5e5e5",
                        }}>
                            <List>
                                <div style={{ color: "#ff0000", fontSize: "18px", paddingBottom: "15px" }}>List member invite</div>
                                {listMember}
                            </List>
                        </Paper>
                    </div>
                    <div className="project-form">
                        <div style={{ width: '107px', margin: "auto" }}>
                            <Button style={{ margin: "20px 0px 50px 0px", backgroundColor: "blue", color: "white" }}>
                                <ArrowDropUp />
                                Submit
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showDesktop = () => {
        const listMember = this.state.member.map((member) =>
            <div style={{ margin: "5px 0px" }} key={member}>
                Name: {member.name} --- Rule: {member.rule}
                <Button style={{ width: "10px", marginLeft: "10px", minWidth: "30px", height: "10px", minHeight: "30px", backgroundColor: "blue", color: "white" }} onClick={() => { this.deleteMember(member) }}>
                    <Clear style={{ paddingBottom: "10px" }}></Clear>
                </Button>
            </div>
        );
        return (
            <div>
                <div className="project-container">
                    <div className="project-header">Create new project</div>
                    <div className="project-form project-name">
                        <div className="project-title">Your Project Name</div>
                        <div className="project-textfield">
                            <TextField
                                variant="outlined"
                                rowsMax={1}
                                multiline
                                fullWidth
                                style={{ padding: "10px", height: "60px" }}
                            />
                        </div>
                    </div>
                    <div className="project-form project-des">
                        <div className="project-title">Description</div>
                        <div className="project-textfield">
                            <TextField
                                variant="outlined"
                                multiline
                                fullWidth
                                rows="6"
                                style={{ padding: "10px", height: "150px" }}
                            />
                        </div>
                    </div>
                    <div className="project-form project-inv">
                        <div className="project-title">Invite member</div>
                        <div className="project-textfield-inv">
                            <TextField
                                variant="outlined"
                                value={this.state.memberform}
                                multiline
                                fullWidth
                                rowsMax={1}
                                style={{ padding: "10px", height: "60px" }}
                                onChange={this.handleMemberForm}
                            />
                        </div>
                        <div className="project-rule">
                            <FormControl variant="filled">
                                <InputLabel>Rule</InputLabel>
                                <Select
                                    native
                                    name="rule"
                                    style={{ width: "150px" }}
                                    value={this.state.rule}
                                    onChange={this.handleRuleForm}
                                >
                                    <option value="" />
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Tester">Tester</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="project-add">
                            <Button style={{ width: "10px", minWidth: "30px", height: "10px", minHeight: "30px", backgroundColor: "blue", color: "white" }} onClick={this.addMember}>
                                <Add style={{ paddingBottom: "10px" }}></Add>
                            </Button>
                        </div>
                    </div>

                    <div className="project-form">
                        <Paper style={{
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 150,
                            width: "100%",
                            height: "150px",
                            padding: '10px 20px',
                            marginTop: '20px',
                            backgroundColor: "#e5e5e5",
                        }}>
                            <List>
                                <div style={{ color: "#ff0000", fontSize: "18px", paddingBottom: "15px" }}>List member invite</div>
                                {listMember}
                            </List>
                        </Paper>
                    </div>
                    <div className="project-form">
                        <div style={{ width: '107px', margin: "auto" }}>
                            <Button style={{ margin: "20px 0px 50px 0px", backgroundColor: "blue", color: "white" }}>
                                <ArrowDropUp />
                                Submit
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {


        return (
            <div>
                <HeaderLogin />
                {isMobile ? this.showMobile() : this.showDesktop()}
                <Footer />
            </div>
        );
    }
}

export default NewProject;
