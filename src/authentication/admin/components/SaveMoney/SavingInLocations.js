import React,{Component} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Container, Grid, Card,CardHeader,CardContent,Typography,Avatar} from "@material-ui/core";
import {fetchPlaces} from "../../state/action/adminPlaceAction";
import {connect} from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton';
import {grey, deepPurple, deepOrange} from '@material-ui/core/colors'

class SavingInLocations extends React.Component{

    componentDidMount(){
        this.props.fetchPlaces()
    }

    render(){
        return <Grid item md={6} xs={12}>
            <Card>
                    <CardHeader
                    title={'Saving in location'}
                    avatar={<LocationOnIcon/>}
                    />
                    <CardContent>
                    {
                        this.props.loading
                        ?
                            (
                                <Grid container spacing={2}>
                                    <Grid item md={6} xs={12}>
                                        <Skeleton 
                                        variant={'rect'} 
                                        width={'100%'} 
                                        height={100}
                                        style={{backgroundColor:grey[500]}}/>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                           <Skeleton 
                                            variant={'rect'} 
                                            width={'100%'} 
                                            height={100}
                                            style={{backgroundColor:grey[500]}}/>
                                    </Grid>
                                </Grid>
                            )
                        :
                            (
                                this.props.places.length<=0
                                ?
                                    (
                                        <Typography>Place is not registered yet ):</Typography>
                                    )
                                :
                                    (
                                      <Grid container spacing={2}>
                                          {
                                              this.props.places.map(place=>(
                                                  <Grid item md={6} xs={6}>
                                                      <Card
                                                       style={{
                                                           backgroundColor:place.id%2===0?deepPurple[500]:'#3C4252',
                                                           color:'white'
                                                       }}
                                                      >
                                                          <CardHeader
                                                           title={place.city}
                                                           subheader={<Typography color={'inherit'}>
                                                               {`Total savers: ${place.savers}`}
                                                           </Typography>}
                                                           avatar={<Avatar>{place.city.charAt(0)}</Avatar>}
                                                          />
                                                      </Card>
                                                  </Grid>
                                              ))
                                          }
                                      </Grid>  
                                    )

                            )
                    }
                    </CardContent>
                </Card>
        </Grid>
    }
}

const mapStateToProps = state=>({
    places:state.authReducer.adminReducers.adminPlacesReducer.places,
    loading:state.authReducer.adminReducers.adminPlacesReducer.loading
})

export default connect(mapStateToProps,{fetchPlaces})(SavingInLocations);