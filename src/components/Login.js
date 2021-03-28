import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
const Login = () => {
    const paperStyle = { padding: 20, height: '60vh', width: '280px', margin: '20vh auto', };
    const AvatarStyle = { backgroundColor: '#47eab9', };
    const btnStyle = { margin: "8px 0" }
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={AvatarStyle}>
                            <LockIcon />
                        </Avatar>
                        <h2> Sign in</h2>

                    </Grid>
                    <TextField label="Username" placeholder="Enter Your Name" type="text" fullWidth required />
                    <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />

                    <Button type="submit" style={btnStyle} variant="contained" fullWidth color="primary">
                        Sign in
                    </Button>
                    <Typography>
                        <Link href="#">Forgot Password ?</Link>
                    </Typography>
                    <Typography>
                        Do You have an account?
                        <Link href="#">Sign up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;