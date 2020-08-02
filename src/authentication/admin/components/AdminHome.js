import React, {Component} from 'react';
import {Container, Grid, Card,CardHeader,CardContent} from "@material-ui/core";
import AdvertsCard from "./widgets/AdvertsCard";
import AdminCard from "./widgets/AdminCard";
import SavingInLocations from './SaveMoney/SavingInLocations'
import BankAndTheirSave from './SaveMoney/BankAndTheirSave'
import TopSavers from './SaveMoney/TopSavers';
import AdminUsers from '../components/AdminUsers'
import SaveMoneyUsers from './SaveMoney/SaveMoneyUsers';
class AdminHome extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Container maxWidth='lg'>
                <AdminCard/>
                <Grid container spacing={2}>
                    <BankAndTheirSave/>
                    <SavingInLocations/>
                </Grid>
                <TopSavers/>
                <SaveMoneyUsers/>
            </Container>
        );
    }
}


export default AdminHome;
