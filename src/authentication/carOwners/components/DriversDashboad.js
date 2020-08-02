import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'
import {translate} from "react-i18next";
import theme from "../../../themes/app_theme";
import withStyles from "@material-ui/core/styles/withStyles";
import authstyle from "../../auth_style";
import driverMenu from "../data/driversMenu";
import LanguageSetter from "../../commons/LanguageSetter";
import Notifications from "../../commons/Notifications";
import Profile from "../../commons/Profile";
import DrawerProfile from "../../commons/DrawerProfile";
import Routes from "../routes/routes";
import {SwipeableDrawer} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import RouteIndicator from "../../commons/RouteIndicator";
import Dashboard from "./Dashboard";
import logo_2 from '../../../assets/logo_2.png'
import {grey} from "@material-ui/core/colors";
import {connect} from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import {me} from "../../state/actions/usersActions";

class DriversDashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false,
            currentPage:'Dashboard'
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)

    }

    handleDrawerToggle = (value,page) => event=>{
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            mobileOpen: value,
            currentPage:page
        })
    }

    componentDidMount() {
        this.props.me()
    }


    render() {
        const {container} = this.props;
        const {classes} = this.props;
        const {t} = this.props
        const drawer = (
            <div className={classes.drawerRoot}>
                <AppBar style={{position: "relative", backgroundColor: '#1E221E'}}>
                    <Toolbar style={{padding: 5}}>
                        <DrawerProfile/>
                    </Toolbar>
                </AppBar>

                <div>
                    {
                        this.props.loading
                        ?
                            (<Skeleton variant='rect'
                                       style={{marginLeft:20,marginTop:20,backgroundColor:'white',borderRadius:5}} width={100} height={15}/>)
                        :
                            (

                                <Typography style={{paddingLeft:20,paddingTop:20,color:grey[500]}}>
                                    {
                                        this.props.user.relations.role[0].name
                                    }
                                </Typography>
                            )
                    }
                    <List>
                        {driverMenu.map((item) => (
                            <ListItem
                                button
                                component={Link}
                                to={item.route}
                                key={item.name}
                                onClick={this.handleDrawerToggle(false,item.name)}
                                className={classes.parent}>
                                <ListItemIcon style={{color: 'white'}}>{item.icon}</ListItemIcon>
                                <ListItemText primary={t(`driver.drawer_menu.${item.name}`)}/>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <Divider/>
            </div>
        )
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar} color='primary'>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle(true,this.state.currentPage)}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Link to='/' className={classes.logo}>
                            <img
                                alt='Tablet Promotions'
                                src={logo_2}
                                width='32' height='32'
                                className={classes.brandIcon}/>
                        </Link>
                        <Typography className={classes.app_name}>{t('home.app_name')}</Typography>
                        <div className={classes.grow}/>
                        <LanguageSetter/>
                        <Notifications/>
                        <div className={classes.profile}>
                            <Profile/>
                        </div>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <SwipeableDrawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}

                            onOpen={this.handleDrawerToggle(true,this.state.currentPage)}
                            onClose={this.handleDrawerToggle(false,this.state.currentPage)}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </SwipeableDrawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <SwipeableDrawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open={this.state.mobileOpen}
                            onOpen={this.handleDrawerToggle(true,this.state.currentPage)}
                            onClose={this.handleDrawerToggle(false,this.state.currentPage)}
                        >
                            {drawer}
                        </SwipeableDrawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Container maxWidth='lg'>
                        <RouteIndicator currentPage={this.state.currentPage}/>
                        <Routes/>
                    </Container>
                </main>
            </div>
        )
    }

}

const mapStateToProps = state=>({
    user: state.userData.user,
    loading:state.userData.loading
})

export default withStyles(authstyle)(translate('common')
(connect(mapStateToProps,{me})(DriversDashboard)))
