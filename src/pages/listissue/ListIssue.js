import React from 'react';
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
            }]
        }
    }

    render() {
        const listIssue = this.state.list.map((issue) => {
            return (
                <Grid container>
                    <Grid xs={12} sm={1}><div style={{ padding: "10px", margin: "center" }}>{issue.id}</div></Grid>
                            <Grid xs={12} sm={3}><div style={{ padding: "10px", margin: "center" }}>{issue.title}</div></Grid>
                            <Grid xs={12} sm={3}><div style={{ padding: "10px", margin: "center" }}>{issue.assignee}</div></Grid>
                            <Grid xs={12} sm={1}><div style={{ padding: "10px", margin: "center" }}>{issue.priority}</div></Grid>
                            <Grid xs={12} sm={1}><div style={{ padding: "10px", margin: "center" }}>{issue.status}</div></Grid>
                            <Grid xs={12} sm={3}><div style={{ padding: "10px", margin: "center" }}>{issue.date}</div></Grid>
                </Grid>
            );
        });
        return (
            <div>
                <HeaderLogin />
                <div style={{ padding: "0px 30px" }}>
                    <div style={{ color: "blue", fontSize: "30px", padding: "20px" }}>Project A > List Issue</div>
                    <form>
                        <Grid container>
                            <Grid xs={12} sm={6} style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "20px" }}>
                                <form>
                                    <input type="text" style={{ color: "black", border: "1px solid black" }} />
                                </form>
                            </Grid>
                            <Grid xs={6} sm={1}><div style={{ padding: "10px", margin: "center" }}>Assignee</div></Grid>
                            <Grid xs={6} sm={1}>
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="assign"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} sm={1}><div style={{ padding: "10px", margin: "center" }}>Priority</div></Grid>
                            <Grid xs={6} sm={1}>
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="priority"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} sm={1}><div style={{ padding: "10px", margin: "center" }}>Status</div></Grid>
                            <Grid xs={6} sm={1}>
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="status"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} sm={1}><div style={{ padding: "10px", margin: "center" }}>Id</div></Grid>
                            <Grid xs={12} sm={3}><div style={{ padding: "10px", margin: "center" }}>Title</div></Grid>
                            <Grid xs={12} sm={3}><div style={{ padding: "10px", margin: "center" }}>Assignee</div></Grid>
                            <Grid xs={12} sm={1}><div style={{ padding: "10px", margin: "center" }}>Priority</div></Grid>
                            <Grid xs={12} sm={1}><div style={{ padding: "10px", margin: "center" }}>Status</div></Grid>
                            <Grid xs={12} sm={3}><div style={{ padding: "10px", margin: "center" }}>Update at</div></Grid>
                            {listIssue}
                        </Grid>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ListIssue;
