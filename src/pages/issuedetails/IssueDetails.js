import React from 'react';
import HeaderLogin from '../../containers/headers/HeaderLogin';
import Footer from '../../containers/footer/Footer';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Cached from '@material-ui/icons/Cached'

class NewProject extends React.Component {
    render() {
        return (
            <div>
                <HeaderLogin />
                <div style={{padding:"0px 30px"}}>
                    <div style={{ color: "blue", fontSize: "30px", padding: "20px" }}>Project A > Issue B</div>
                    <form>
                        <Grid container>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "20px" }}>Title</Grid>
                            <Grid xs={12} sm={11} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                                Title is here
                            </Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "20px" }}>Description</Grid>
                            <Grid xs={12} sm={11} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                            Description is the fiction-writing mode for transmitting a mental 
                            image of the particulars of a story. Together with dialogue, narration, exposition, 
                            and summarization, description is one of the most widely recognized of the fiction-writing modes.
                             As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details;
                              it is bringing something to 
                            life by carefully choosing and arranging words and phrases to produce the desired effect.
                            </Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "20px" }}>Owner</Grid>
                            <Grid xs={12} sm={11} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                                Owner is here
                            </Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", margin: "auto" }}>
                                Status
                            </Grid>
                            <Grid xs={12} sm={3} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
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
                            <Grid xs={0} sm={4}></Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", margin: "auto" }}>
                                Start date
                            </Grid>
                            <Grid xs={12} sm={3} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                                <TextField
                                    type="date"
                                    defaultValue="2017-05-24"
                                />
                            </Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", margin: "auto" }}>
                                Priority
                            </Grid>
                            <Grid xs={12} sm={3} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
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
                            <Grid xs={0} sm={4}></Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", margin: "auto" }}>
                                Due date
                            </Grid>
                            <Grid xs={12} sm={3} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                                <TextField
                                    type="date"
                                    defaultValue="2017-05-24"
                                />
                            </Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", margin: "auto" }}>
                                Assignee
                            </Grid>
                            <Grid xs={12} sm={3} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                                <FormControl variant="filled">
                                    <Select
                                        native
                                        name="assignee"
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={0} sm={4}></Grid>
                            <Grid xs={12} sm={1} style={{ paddingLeft: "10px", margin: "auto" }}>
                                Estimate
                            </Grid>
                            <Grid xs={12} sm={3} style={{ paddingLeft: "10px", marginBottom: "20px" }}>
                                <TextField
                                    type="text"
                                    multiline
                                />
                            </Grid>
                            <Button style={{ margin: "20px 0px", marginLeft: "auto", marginRight: "auto", backgroundColor: "blue", color: "white" }}>
                                <Cached />
                                Update
                            </Button>
                        </Grid>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NewProject;
