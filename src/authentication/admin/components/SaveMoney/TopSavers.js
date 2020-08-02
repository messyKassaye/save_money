import React,{Component} from 'react'
import { Container, Card, CardHeader, CardContent, Grid,Divider } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
class TopSavers extends React.Component{

    render(){
        return <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <Card>
                    <CardHeader
                    title={'Top savers'}
                    avatar={<AttachMoneyIcon/>}
                    style={{backgroundColor:"#3C4252",color:'white'}}
                    />
                    <Divider/>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    }
}

export default TopSavers;