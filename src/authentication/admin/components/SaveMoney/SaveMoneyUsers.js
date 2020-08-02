import React,{Component} from 'react'
import { Grid } from '@material-ui/core'
import Users from '../Users'

class SaveMoneyUsers extends React.Component{
    

    render(){
        return <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <Users/>
            </Grid>
        </Grid>
    }
}

export default SaveMoneyUsers