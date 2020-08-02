import React, {Component} from 'react';
import {
    Card, CardHeader, CardContent, Divider, Grid, Button
    , Container, InputBase, Menu, MenuItem, Typography, Table,TableHead,TableRow, TableBody, TableCell
} from "@material-ui/core";
import {fetchUsers} from "../state/action/adminUsersAction";
import {showMainDialog} from "../state/action/dialogAction";
import AddNewUser from "../dialogs/component/AddNewUser";
import SingleLoading from "../../commons/loading/SingleLoading";
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from '@material-ui/icons/Search'
import UserCard from "../../commons/components/UserCard";
import userStyle from "../../commons/style/usersStyle";
import {connect} from "react-redux";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import UsersLoader from "../../commons/loading/UsersLoader";
import Skeleton from "@material-ui/lab/Skeleton";
import {grey} from "@material-ui/core/colors";
import {StyledTableCell} from "./AdminAdverts";
import PersonIcon from '@material-ui/icons/Person';

import {usersColumn as columns} from '../data/columns'
import Users from './Users';
class AdminUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
            anchorEl:null,
            name:'',
            showing:'all',
            users:[]
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }


    render() {
        const {classes} = this.props
        return (
            <Container maxWidth={"lg"}>
                <Users/>
            </Container>
        );
    }
}

const mapStateToProps = state=>({
    users:state.authReducer.adminReducers.adminUsersReducers.users,
    loading:state.authReducer.adminReducers.adminUsersReducers.loading
})

export default connect(mapStateToProps,{showMainDialog,fetchUsers})
(withStyles(userStyle)(AdminUsers));
