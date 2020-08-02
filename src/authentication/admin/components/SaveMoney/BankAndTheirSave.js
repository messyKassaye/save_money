import React,{Component} from 'react'
import {Container, Grid, Card,CardHeader,CardContent, Typography, Avatar} from "@material-ui/core";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import {fetchPlaces} from "../../state/action/adminPlaceAction";
import {connect} from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton';
import {grey, deepPurple, deepOrange, green} from '@material-ui/core/colors'
import {fetchAdminBanks} from "../../state/action/AdminBankAction";

class BankAndTheirSave extends React.Component{

    componentDidMount(){
        this.props.fetchAdminBanks()
    }

    render(){
        return <Grid item md={6} xs={12}>
            <Card>
                <CardHeader
                title={'Bank and their savers'}
                avatar={<AttachMoneyIcon/>}
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
                                this.props.banks.length<=0
                                ?
                                    (
                                        <Typography>Bank is not registered yet ):</Typography>
                                    )
                                :
                                    (
                                      <Grid container spacing={2}>
                                          {
                                              this.props.banks.map(bank=>(
                                                  <Grid item md={6} xs={6}>
                                                      <Card style={{
                                                          backgroundColor:bank.id%2==0?deepOrange[500]:green[500],
                                                          color:'white'
                                                      }}>
                                                          <CardHeader
                                                           title={bank.name}
                                                           subheader={<Typography style={{color:grey[300]}}>
                                                               {`Total savers: ${bank.users}`}
                                                               </Typography>}
                                                           avatar={<Avatar>{bank.name.charAt(0)}</Avatar>}
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
    banks:state.authReducer.adminReducers.bankReducer.banks,
    loading:state.authReducer.adminReducers.bankReducer.loading
})

export default connect(mapStateToProps,{fetchAdminBanks})(BankAndTheirSave);