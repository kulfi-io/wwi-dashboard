import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export class NavBar extends React.Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar data-testid="app-bar" positon="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={this.props.classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon data-testid="menu-icon" />
                        </IconButton>
                        <Typography
                            data-testid="title"
                            className={this.props.classes.title}
                        >
                            wwi-dashboard
                        </Typography>
                        <div className="nav-bar-right">
                            <Button data-testid="signin" color="inherit">
                                signin
                            </Button>
                            <Button data-testid="signup" color="inherit">
                                signup
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

NavBar.defaultProps = {
    classes: makeStyles((theme) => ({
        root: { flexGrow: 1 },
        menuButton: { marginRight: theme.spacing(2) },
        title: { flexGrow: 1, whiteSpace: "nowrap" },
    })),
};

export default NavBar;
