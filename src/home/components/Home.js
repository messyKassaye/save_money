import React,{Component} from 'react'
import { Container, Grid, AppBar, Paper, Toolbar, Typography } from '@material-ui/core'
import homeStyle from './styles/homeStyle'
import withStyles from "@material-ui/core/styles/withStyles";
import Login from './Login';

class Home extends React.Component{


    render(){
        const {classes} = this.props
        return <div className={classes.container}>
           <AppBar elevation={0} style={{backgroundColor:'transparent'}}>
               <Toolbar>
                   <Container>
                       <div className={classes.logo}>
                         <Typography variant={'h4'} color={'primary'}>Save</Typography>
                         <Typography variant={'h4'} color={'secondary'}>Money</Typography>
                       </div>
                   </Container>
               </Toolbar>
           </AppBar>

           <Container maxWidth={'md'} className={classes.loginContainer}>
               <Login/>
           </Container>
        </div>
    }

}

export default withStyles(homeStyle)(Home)