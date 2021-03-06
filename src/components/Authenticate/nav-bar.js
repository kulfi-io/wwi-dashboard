import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Link
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


export class NavBar extends React.Component {
    render() {
        return (
            <div data-testid="navbar" className={this.props.classes.root}>
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
                            <Link
                                data-testid="title-link"
                                id="title"
                                variant="body1"
                                href="/"
                                color="inherit"
                                style={{whiteSpace: "nowrap"}}
                            >
                                wwi-dashboard
                            </Link>
                        </Typography>
                        <div className="nav-bar-right">
                            <Link
                                data-testid="signin"
                                id="signin"
                                variant="body1"
                                href="/signin"
                                color="inherit"
                            >
                                signin
                            </Link>
                            <Link
                                data-testid="signup"
                                id="signup"
                                variant="body1"
                                href="/signup"
                                color="inherit"
                            >
                                signup
                            </Link>
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
