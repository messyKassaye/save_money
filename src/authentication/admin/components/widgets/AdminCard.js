import React, {Component} from 'react';
import {Card, Container, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import SingleLoading from "../../../commons/loading/SingleLoading";
import CommonDashboardCard from "../../../commons/components/CommonDashboardCard";
import {deepOrange, deepPurple, green} from "@material-ui/core/colors";

class AdminCard extends Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {
       
    }


    render() {
        return (
            <Grid container spacing={2}>
                           <Grid item md={3} xs={12}>
                           <CommonDashboardCard
                                    chartBackgroundColor={deepOrange[500]}
                                    cardBackgroundColor={green[500]}
                                    textColor={'white'}
                                    title={10}
                                    subheader={'Total users'}
                                />
                           </Grid>


                            <Grid item md={3} xs={12}>
                                <CommonDashboardCard
                                    chartBackgroundColor={green[500]}
                                    cardBackgroundColor={'#3C4252'}
                                    textColor={'white'}
                                    title={12}
                                    subheader={'Total banks'}
                                />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <CommonDashboardCard
                                    chartBackgroundColor={green[500]}
                                    cardBackgroundColor={deepPurple[600]}
                                    textColor={'white'}
                                    title={`${100000} ETB`}
                                    subheader={'Total saving'}
                                />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <CommonDashboardCard
                                    chartBackgroundColor={deepPurple[500]}
                                    cardBackgroundColor={'#1976d2'}
                                    textColor={'white'}
                                    title={`${1000} ETB`}
                                    subheader={'Total saving deposit'}
                                />
                            </Grid>

            </Grid>
        );
    }
}



export default AdminCard;
