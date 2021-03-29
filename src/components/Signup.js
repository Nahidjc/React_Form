import { Avatar, Button, Checkbox, FormControl, FormLabel, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field } from 'formik';
const Signup = () => {
    const paperStyle = { height: '60vh', width: '350px', padding: '30px 20px', margin: '20vh auto' };
    const avatarStyle = { backgroundColor: "#149593", }
    const marginTop = { marginTop: "20px" }
    const boxStyle = { paddingLeft: "0px", marginTop: "5px" };
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">

                        <Avatar style={avatarStyle}>
                            <ControlPointIcon />
                        </Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <TextField label="Username" placeholder="Enter your username" required fullWidth type="text"> </TextField>
                    <TextField label="Emai" placeholder="Enter your Email" required fullWidth type="email"> </TextField>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" row>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField label="Phone Number" placeholder="Enter your Phone" required fullWidth type="phone"> </TextField>
                    <TextField label="Password" required fullWidth type="password"> </TextField>
                    <TextField label="Confirm Password" required fullWidth type="password"> </TextField>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button variant="contained" color="primary"> Sign up</Button>

                </Paper>
            </Grid>
        </div>
    );
};

export default Signup;