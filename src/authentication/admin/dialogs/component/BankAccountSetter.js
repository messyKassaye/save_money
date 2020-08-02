import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import adminMainDialogStyle from "../styles/mainDialogStyle";
import LoadingButton from "../../../../home/components/widgets/LoadingButton";
import {bankAccountStore} from "../../state/action/bankAccountSetterAction";
import {showMainDialog} from "../../state/action/dialogAction";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import {green} from "@material-ui/core/colors";
class BankAccountSetter extends Component {
    constructor(props) {
        super(props);
        this.state={
            formData:{
                'bank_id':'',
                'account_holder_full_name':'',
                'account_number':''
            },
            submitted: false,
            loading: false,
            finished: false,
        }
    }
    
    handleChange = (event)=>{
        const {formData} = this.state
        formData[event.target.name] =event.target.value
        this.setState(formData)
    }

    handleSubmit = event=>{
        event.preventDefault()
        this.setState({
            submitted: true,
            loading: true
        })
        const {formData} = this.state
        this.props.bankAccountStore(formData)
    }

    componentDidMount() {
        const {formData} = this.state
        formData['bank_id'] = this.props.bank.id
        this.setState(formData)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.response.status){
            this.setState({
                submitted: false,
                loading: false
            })
            setTimeout(()=>{
                this.props.showMainDialog({'show':false,'page':null,'title':'',actions:{on:false,path:'',id:''}})
            },2000)
        }
    }

    render() {
        const {classes,t} = this.props
        const {formData} = this.state
        const {loading} = this.state;
        const {finished} = this.state
        const setLoading = !finished && loading;
        const isEnabled = formData.account_holder_full_name.length > 0 && formData.account_number.length > 0

        return (
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <Typography style={{color:green[500]}}>{this.props.response.message}</Typography>
                <TextField
                    className={classes.textInput}
                    placeholder='Account folder full name'
                 name='account_holder_full_name'
                 value={this.state.formData.account_holder_full_name}
                 onChange={this.handleChange}
                />

                <TextField
                    className={classes.textInput}
                 placeholder='Account number'
                 name='account_number'
                 value={this.state.formData.account_number}
                 onChange={this.handleChange}
                />

                <LoadingButton
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={!isEnabled || this.state.submitted}
                    loading={setLoading}
                    text={t('dialog.addNewBank.addNewBakButton')}
                    done={finished}
                >
                    {
                        t('dialog.addNewBank.addNewBakButton')
                    }
                </LoadingButton>

            </form>
        );
    }
}

const mapStateToProps = state=>({
    response: state.authReducer.adminReducers.bankAccountReducer.response
})

export default connect(mapStateToProps,{bankAccountStore,showMainDialog})
(translate('common')(withStyles(adminMainDialogStyle)(BankAccountSetter)));
