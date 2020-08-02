import React,{Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import signup from './styles/signup_style'
import { Typography,Card,CardContent } from '@material-ui/core'
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import LoadingButton from '../components/widgets/LoadingButton'
import {API_AUTH_URL} from '../../constants/constants'
import {set} from '.././../TokenService'
import axios from 'axios'
import {setRole} from '.././../TokenService'
import { withRouter } from 'react-router-dom'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            formData: {
                "email": '',
                "password": ''
            },
            submitted: false,
            loading: false,
            finished: false,
            errorMessage: ''
        }
    }

    handleChange = (event)=>{
        const {formData} = this.state
        formData[event.target.name] = event.target.value
        this.setState(formData)
    }

    handleSubmit = ()=>{
        const {formData} = this.state
        this.setState({
            submitted: true,
            loading: true
        })
        axios.post(`${API_AUTH_URL}login`, formData, {
            headers: {
                'content-type': 'Application/json'
            },
            timeout:1000*5,
        })
            .then((res) => res.data)
            .then((response) => {
                set(response.token)
                setRole(JSON.stringify(response.role))
                setTimeout(()=>{
                    this.props.history.push('/auth')
                },2000)
            })
            .catch(onerror=>{
                if(!onerror.response){
                    this.setState({errorMessage:'networkError'})
                    this.setState({
                        loading: false,
                        finished: false,
                        submitted: false,
                    })
                }else {
                    let code = onerror.response.status
                    if(code===403){
                        this.setState({errorMessage:'Unauthorized user'})
                    }
                    this.setState({
                        loading: false,
                        finished: false,
                        submitted: false,
                    })
                }

            })
    }

    render(){
        const {classes} = this.props
        const {formData} = this.state
        const {loading} = this.state;
        const {finished} = this.state
        const setLoading = !finished && loading;
        const isEnabled = formData.email.length > 0 && formData.password.length > 0
        return <div className={classes.container}>
            <Typography variant={'h6'} color={"primary"}>Save your money starting form 1 ETB upto 100 ETB from your 
                mobile account into your bank account.Start saving to your future, to your family and to your children.</Typography>
        
            <Typography variant={'h4'} color={'textSecondary'} style={{marginTop:75}}>
                Login
            </Typography>


            <Card className={classes.form}>
                        <CardContent>
                            <ValidatorForm
                                onSubmit={this.handleSubmit}
                            >
                                {
                                    <Typography component='p' className={classes.errors}>
                                    {this.state.errorMessage ? this.state.errorMessage: ''}
                                    </Typography>
                                }
                                <TextValidator
                                    className={classes.text_input}
                                    label={'Enter your email'}
                                    onChange={this.handleChange}
                                    name="email"
                                    type='email'
                                    value={this.state.formData.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['Please enter your email address', 'is not valid email']}
                                />

                                <TextValidator
                                    className={classes.text_input}
                                    label={'Password'}
                                    onChange={this.handleChange}
                                    name="password"
                                    type='password'
                                    value={this.state.formData.password}
                                    validators={['required']}
                                    errorMessages={['Please enter your password']}
                                />
                                <LoadingButton
                                        className={classes.text_input}
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        disabled={!isEnabled || this.state.submitted}
                                        loading={setLoading}
                                        text={'Login'}
                                        done={finished}
                                    >
                                        {
                                            "Login"
                                        }
                                    </LoadingButton>
                            </ValidatorForm>
                        </CardContent>
                    </Card>
        
        </div>
    }
}

export default withRouter(withStyles(signup)(Login))