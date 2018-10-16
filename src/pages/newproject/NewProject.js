import React from 'react';
import HeaderLogin from '../../containers/headers/HeaderLogin';
import Footer from '../../containers/footer/Footer';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'

class NewProject extends React.Component {
    render() {
        return (
            <div>
                <HeaderLogin />
                <div>
                    <div style={{ color: "blue", fontSize: "30px", padding: "20px" }}>Create new project</div>
                    <form>
                        <Grid container>
                            <Grid xs={12} sm={3} style={{ margin: "auto", paddingLeft: "10px" }}>Your Project Name</Grid>
                            <Grid xs={12} sm={9}>
                                <TextField
                                    variant="outlined"
                                    multiline
                                    fullWidth
                                    style={{ padding: "10px" }}
                                />
                            </Grid>
                            <Grid xs={12} sm={3} style={{ margin: "auto", paddingLeft: "10px" }}>Description</Grid>
                            <Grid xs={12} sm={9}>
                                <TextField
                                    variant="outlined"
                                    multiline
                                    fullWidth
                                    rows="6"
                                    style={{ padding: "10px" }}
                                />
                            </Grid>
                            <Grid xs={12} sm={3} style={{ margin: "auto", paddingLeft: "10px" }}>Invite member</Grid>
                            <Grid xs={8} sm={7}>
                                <TextField
                                    variant="outlined"
                                    multiline
                                    fullWidth
                                    style={{ padding: "10px" }}
                                />
                            </Grid>
                            <Grid xs={2} sm={1}>
                                <FormControl variant="filled">
                                    <InputLabel>Rule</InputLabel>
                                    <Select
                                        native
                                        name="age"
                                        inputProps={{
                                            id: 'age-native-required',
                                        }}
                                    >
                                        <option value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={2} sm={1}>
                                <Button style={{margin:"15px 0px", backgroundColor:"blue", color:"white"}}>
                                    <Add ></Add>
                                </Button>
                            </Grid>
                            <Grid xs={12}>
                                <Paper style={{
                                    width: '95%',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: 150,
                                    padding: '10px',
                                    margin: '10px 20px'
                                }}>
                                    <List>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                        <div>Heellu</div>
                                    </List>
                                </Paper>
                            </Grid>
                            <Button style={{margin: "20px 0px", marginLeft:"auto", marginRight: "auto", backgroundColor: "blue", color:"white"}}>
                                <ArrowDropUp />
                                Submit
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
