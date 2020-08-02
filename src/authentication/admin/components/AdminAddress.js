import React,{Component} from 'react'
import { Container, Card, CardHeader,CardContent,IconButton, Grid,Divider
,Typography,CardActions,Button } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add'
import {showMainDialog} from "../state/action/dialogAction";
import {connect} from 'react-redux'
import AddNewPlace from '../dialogs/component/AddNewPlace'
import DeleteMessage from "../dialogs/component/DeleteMessage";
import {green} from "@material-ui/core/colors";
import {fetchPlaces} from "../state/action/adminPlaceAction";
import FourByFourSkeleton from '../../commons/loading/customSkeleton';

class AdminAddress extends React.Component{

    addNewAddress = ()=>{
        this.props.showMainDialog({'show':true,'page':<AddNewPlace form={{type:'',data:null}}/>,title:'Add new place',actions:{on:false,path:'',id:''}})

    }

    componentDidMount = ()=>{
        this.props.fetchPlaces()

    }

    handleButtonClick = (component,titles,action)=>{
        this.props.showMainDialog({'show':true,'page':component,title: titles,actions:action})
    }

    render(){
        return <Container maxWidth={'lg'}>
            <Card>
                <CardHeader
                 title ={"Address in Ethiopia"}
                 avatar={<LocationOnIcon/>}
                 action={
                    <IconButton color='primary' onClick={this.addNewAddress}>
                        <AddIcon/>
                   </IconButton>
                 }
                />
                <CardContent>
                    {
                        this.props.loading
                        ?
                            (
                                <Grid container spacing={2}>
                                    <FourByFourSkeleton/>
                                </Grid>
                            )
                        :
                            (
                                <Grid container spacing={2}>
                                {
                                    this.props.places.length>0
                                    ?
                                        (
                                            this.props.places.map(place=>(
                                                <Grid item md={4} xs={12}>
                                                    <Card style={{backgroundColor:green[500],color:'white'}}>
                                                        <CardHeader
                                                        title={place.city}
                                                        subheader={place.country}
                                                        />
                                                        <Divider/>
                                                        <CardContent>
                                                            <Typography>{`Total users: ${place.users}`}</Typography>
                                                        </CardContent>
                                                        <CardActions style={{display:'flex',justifyContent:'flex-end'}}>

                                                            <Button
                                                                color='inherit'
                                                                variant='text'
                                                                style={{textTransform:'none'}}
                                                                onClick={()=>this.handleButtonClick(
                                                                    <DeleteMessage message={`Are you sure. you want to remove ${place.city}`}/>,
                                                                    'Confirmation',
                                                                    {on:true,path:`places`,id:place.id}
                                                                )}
                                                            >
                                                                Remove
                                                            </Button>
                                                            <Button
                                                                color='inherit'
                                                                variant='outlined'
                                                                onClick={()=>this.handleButtonClick(<AddNewPlace form={{type:'Edit',data:place}}/>,`Edit ${place.city}`,place)}
                                                                style={{textTransform:'none'}}
                                                            >
                                                                Edit
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
                                            ))

                                        )
                                    :
                                        (
                                            <Typography>There is no registered places</Typography>
                                        )
                                }
                            </Grid>
                            )
                    }
                </CardContent>
            </Card>
        </Container>
    }
}

const mapStateToProps = state=>({
    places:state.authReducer.adminReducers.adminPlacesReducer.places,
    loading:state.authReducer.adminReducers.adminPlacesReducer.loading
})

export default connect(mapStateToProps,{showMainDialog,fetchPlaces})(AdminAddress);