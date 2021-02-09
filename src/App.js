import { AppBar, Avatar, Button, Card, Checkbox, FormControl, FormHelperText, Icon, IconButton, Input, InputLabel, SvgIcon, TextField, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
const App = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6" >
                        News
                    </Typography>
                    <Icon color="action" ></Icon>

                    <Avatar>S</Avatar>
                    <Icon>home</Icon>
                    <Icon>notifications</Icon><Icon>settings</Icon><Icon>star</Icon>
                    <SvgIcon>
                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </SvgIcon>
                </Toolbar>
            </AppBar>
            <Card>

                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    <Button variant="contained" color="primary">Login</Button>
                </FormControl>
                <br />
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Add" />

                </form>
                <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                />
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Edit" />

                </form>
                <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                />
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Delete" />

                </form>
                <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                />
            </Card>

        </div>

    )
}

export default App
