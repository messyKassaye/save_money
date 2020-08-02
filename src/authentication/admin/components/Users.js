import React,{Component} from 'react'
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

class Users extends React.Component{

    render(){

        return <div>
             <Card>
                    <CardHeader
                      title={'Users'}
                      avatar={<PersonIcon/>}
                    />
                    <CardContent>
                        {
                            this.props.loading
                            ?
                                (
                                    <Skeleton 
                                    variant={'rect'} 
                                    width={'100%'} 
                                    height={400}
                                    style={{backgroundColor:grey[300]}}/>
                                )
                            :
                                (
                                    <Table>
                                        <TableHead>
                                        {columns.map(column => (
                                                    <StyledTableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{minWidth: column.minWidth}}
                                                    >
                                                        {column.label}
                                                    </StyledTableCell>
                                                ))}
                                        </TableHead>
                                        <TableBody>
                                            {
                                                this.props.users.map(user=>(
                                                    <TableRow key={user.id}>
                                                        <TableCell>
                                                            {`${user.first_name} ${user.last_name}`}
                                                        </TableCell>

                                                        <TableCell>
                                                            {user.phone}
                                                        </TableCell>

                                                        <TableCell>
                                                            {user.email}
                                                        </TableCell>
                                                        {
                                                            user.address.length<=0
                                                            ?
                                                                (
                                                                    <TableCell>
                                                                          <Typography color={'secondary'}>No assigned</Typography>
                                                                    </TableCell>
                                                                )
                                                            :
                                                                (
                                                                    <div>
                                                                        {
                                                                            user.address.map(address=>(
                                                                            <TableCell>{address.city}</TableCell>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                )
                                                        }

                                                        {
                                                            user.banks.length<=0
                                                            ?
                                                                (
                                                                    <TableCell>
                                                                        <Typography color={'secondary'}>Not assigned</Typography>
                                                                    </TableCell>

                                                                )
                                                            :
                                                                (
                                                                    <div>
                                                                        {
                                                                            user.banks.map(bank=>(
                                                                                <TableCell align={"left"}>
                                                                                    <span>{bank.name}</span>
                                                                                </TableCell>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                )
                                                        }
                                                        <TableCell>{`${user.saves.length} times`}</TableCell>
                                                        <TableCell align={'center'}>
                                                            <div style={{display:'flex',flexDirection:'row'}}>
                                                                <Button
                                                                 style={{textTransform:'none',marginRight:5}}
                                                                 variant={'outlined'}
                                                                 color={'primary'}
                                                                 size={'small'}
                                                                >
                                                                    profile
                                                                </Button>

                                                                <Button
                                                                 style={{textTransform:'none',marginRight:5}}
                                                                 variant={'outlined'}
                                                                 color={'secondary'}
                                                                 size={'small'}
                                                                >
                                                                    delete
                                                                </Button>

                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                )
                        }
                    </CardContent>
                </Card>
        </div>
    }
}

const mapStateToProps = state=>({
    users:state.authReducer.adminReducers.adminUsersReducers.users,
    loading:state.authReducer.adminReducers.adminUsersReducers.loading
})

export default connect(mapStateToProps,{fetchUsers})(Users);