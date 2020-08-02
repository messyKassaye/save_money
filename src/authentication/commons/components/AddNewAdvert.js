import React, {Component} from 'react';
import {fetchCompanies} from "../../admin/state/action/adminCompaniesAction";
import {connect} from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";
import adminMainDialogStyle from "../../admin/dialogs/styles/mainDialogStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import {commonFetchAdvertMedia} from "../state/actions/advertMediaTypeAction";
import {commonFetchAdvertPlaces} from "../state/actions/commonAdvertPlacesAction";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Skeleton from "@material-ui/lab/Skeleton";
import {green, grey} from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import LoadingButton from "../../../home/components/widgets/LoadingButton";
import {translate} from "react-i18next";
import {commonStoreAdvert} from "../state/actions/commonAdvertAction";
import Typography from "@material-ui/core/Typography";
import {showMainDialog} from "../../admin/state/action/dialogAction";
import AdvertPaymentTransaction from "./AdvertPaymentTransaction";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import NewCompany from "../../advertisers/components/NewCompany";
import {companyIndex} from "../../advertisers/state/action/companiesAction";

class AddNewAdvert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{
                company_id:'',
                product_name:'',
                required_views_number:0,
                advertisement_media_id:'',
                advert_places:[]
            },
            isAdvertSaved:false,
            isMediaSelected:false,
            mediaTypeValue: '',
            acceptMediaType: '',
            advertPlaceValue: [],
            advertPlaces:[],
            submitted: false,
            loading: false,
            finished: false,
        }
    }



    handleChange = (event,values)=>{
        const {formData} = this.state
        formData[event.target.name] = event.target.value;
        this.setState(formData)
        console.log(formData)
    }
    handleAutocompleteChange = (event,values)=>{
        const {formData} = this.state
        formData['company_id'] = values[0].id;
        this.setState(formData)
    }

    handleMediaSelect = () => {
        this.setState({
            isMediaSelected: false
        })
    }

    handleMediaSelectOpen = () => {
        this.setState({
            isMediaSelected: true
        })
    }

    handleMediaSelectChange = (event) => {
        this.setState({
            mediaTypeValue: event.target.value,
        })

        const {formData} = this.state
        formData[event.target.name] = event.target.value;
        this.setState(formData)

        let acceptValue = this.props.media.filter(media => media.id === event.target.value);
        this.setState({
            acceptMediaType: acceptValue[0].name.toLowerCase()
        })
    }

    handleChange = event=>{
        const {formData} = this.state
        formData[event.target.name] = event.target.value;
        this.setState(formData)
    }


    handleAdvertPlacesChange = event => {
        const places = this.state.advertPlaceValue
        places.push(event.target.value)
        this.setState({
            advertPlaceValue:event.target.value
        })

        this.setState({
            advertPlaces:places
        })

    };
    handleSubmit = event=>{
        event.preventDefault()
        this.resetFormData()

        this.setState({
            submitted: true,
            loading: true
        })
        const {formData} = this.state
        console.log(formData)
        this.props.commonStoreAdvert(formData)


    }

    resetFormData = ()=>{
        const {formData} = this.state
        const advertPlaces = this.state.advertPlaceValue
        formData['advert_places'] = JSON.stringify(advertPlaces)
        this.setState(formData)
    }
    componentDidMount() {
        this.props.companyIndex()
        this.props.commonFetchAdvertMedia()
        this.props.commonFetchAdvertPlaces()

        if(this.props.form.type==='Edit'){
            console.log(this.props.form.data)
            const {formData} = this.state
            formData['company_id'] = this.props.form.data.company_id
            formData['product_name'] = this.props.form.data.product_name
            formData['required_views_number'] = this.props.form.data.required_views_number
            formData['advertisement_media_id'] = this.props.form.data.advertisement_media_type_id

            this.setState({
                formData,
                mediaTypeValue:this.props.form.data.advertisement_media_type_id,
                advertPlaces:this.props.form.data.places
            })
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.response.status){
            this.setState({
                loading: false,
                finished: false,
                submitted: false,
            })
            setTimeout(()=>{
                this.setState({
                    isAdvertSaved:true
                })

            },2000)
        }
    }

    render() {
        const {classes,t} = this.props
        const {formData} = this.state
        const {loading} = this.state;
        const {finished} = this.state
        const setLoading = !finished && loading;
        const isEnabled = formData.company_id > 0 && formData.product_name.length > 0&&
            formData.advertisement_media_id>0&&formData.required_views_number>0

        return (
            <div>

                {
                    this.props.companyLoading
                    ?
                        (
                            <React.Fragment>
                                <Skeleton width='100%' height={20} style={{backgroundColor:grey[500]}}/>
                                <Skeleton width='100%' height={20} style={{backgroundColor:grey[500]}}/>
                                <Skeleton width='100%' height={20} style={{backgroundColor:grey[500]}}/>
                                <Skeleton width='100%' height={20} style={{backgroundColor:grey[500]}}/>
                                <Skeleton width='100%' height={20} style={{backgroundColor:grey[500]}}/>
                            </React.Fragment>

                        )
                    :
                        (
                           <div>
                               {
                                   this.props.companies.length<=0
                                   ?
                                       (
                                          <div>
                                              <Typography style={{color:green[500]}}>Before adding your advert please tell us your company name.</Typography>
                                              <NewCompany form={{type:'',data:''}} from={'new_advert'}/>
                                          </div>
                                       )
                                   :
                                       (
                                           <div>
                                               {
                                                   this.state.isAdvertSaved
                                                       ?
                                                       (
                                                           <div style={{display:'flex',flexDirection:'column'}}>
                                                               <Typography style={{color:green[600]}}>
                                                                   Thank you for advertising your product on our company.
                                                                   The last step is finishing your payment and uploading your advertisement media data
                                                               </Typography>
                                                               <AdvertPaymentTransaction advert={this.props.response.data}/>
                                                           </div>
                                                       )
                                                       :
                                                       (
                                                           <ValidatorForm className={classes.form} onSubmit={this.handleSubmit}>
                                                               <Typography style={{color:green[600]}}>{this.props.response.message}</Typography>
                                                               <Autocomplete
                                                                   className={classes.textInput}
                                                                   multiple={true}
                                                                   onChange={this.handleAutocompleteChange}
                                                                   value={this.state.formData.company}
                                                                   id="combo-box-demo"
                                                                   options={this.props.company}
                                                                   getOptionLabel={option => option.name}
                                                                   renderInput={params => (
                                                                       <TextField onChange={this.handleChange} {...params} placeholder="Company name" variant="standard" fullWidth />
                                                                   )}
                                                               />

                                                               <TextValidator
                                                                   name='product_name'
                                                                   label='Product name'
                                                                   className={classes.textInput}
                                                                   onChange={this.handleChange}
                                                                   value={this.state.formData.product_name}
                                                               />

                                                               <TextValidator
                                                                   name='required_views_number'
                                                                   label='Expected play number of this product'
                                                                   className={classes.textInput}
                                                                   onChange={this.handleChange}
                                                                   value={this.state.formData.required_views_number}
                                                               />

                                                               {
                                                                   this.props.loading
                                                                       ?
                                                                       (
                                                                           <Skeleton width='100%' height={50} style={{backgroundColor:grey[500]}}/>
                                                                       )
                                                                       :
                                                                       (
                                                                           <FormControl className={classes.formControl}>
                                                                               <InputLabel
                                                                                   htmlFor="demo-controlled-open-select">{'Select advertisement media type'}</InputLabel>
                                                                               <Select
                                                                                   name='advertisement_media_id'
                                                                                   value={this.state.mediaTypeValue}
                                                                                   open={this.state.isMediaSelected}
                                                                                   onClose={this.handleMediaSelect}
                                                                                   onOpen={this.handleMediaSelectOpen}
                                                                                   onChange={this.handleMediaSelectChange}
                                                                               >
                                                                                   {
                                                                                       this.props.media.map(items => (
                                                                                           <MenuItem key={items.name} value={items.id}
                                                                                                     name={items.name}>{items.name}</MenuItem>
                                                                                       ))
                                                                                   }
                                                                               </Select>
                                                                           </FormControl>
                                                                       )
                                                               }

                                                               {
                                                                   this.props.advertPlaceLoading
                                                                       ?
                                                                       (
                                                                           <Skeleton width='100%' height={50} style={{backgroundColor:grey[500]}}/>
                                                                       )
                                                                       :
                                                                       (
                                                                           <FormControl className={classes.formControl}>
                                                                               <InputLabel >Select advertisement places</InputLabel>
                                                                               <Select
                                                                                   multiple
                                                                                   value={this.state.advertPlaceValue}
                                                                                   onChange={this.handleAdvertPlacesChange}
                                                                                   input={<Input />}
                                                                                   renderValue={selected => selected.join(', ')}
                                                                               >
                                                                                   {this.props.advertPlaces.map(items => (
                                                                                       <MenuItem key={items.city} value={items.id}>
                                                                                           <Checkbox checked={this.state.advertPlaceValue.indexOf(items.id) > -1} />
                                                                                           <ListItemText primary={items.city} />
                                                                                       </MenuItem>
                                                                                   ))}
                                                                               </Select>
                                                                           </FormControl>
                                                                       )
                                                               }

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
                                                           </ValidatorForm>
                                                       )
                                               }
                                           </div>

                                       )
                               }
                           </div>
                        )
                }

            </div>


        );
    }


}

const mapStateToProps = state=>({
    media:state.authReducer.commonReducer.commonAdvertMediaReducer.mediaTypes,
    loading:state.authReducer.commonReducer.commonAdvertMediaReducer.loading,
    advertPlaces:state.authReducer.commonReducer.commonAdvertPlacesReducer.advertPlaces,
    advertPlaceLoading: state.authReducer.commonReducer.commonAdvertPlacesReducer.loading,
    response:state.authReducer.commonReducer.commonAdvertsReducer.response,
    companies:state.authReducer.advertisersReducers.companyData.companies,
    companyLoading:state.authReducer.advertisersReducers.companyData.loading
})
export default withStyles(adminMainDialogStyle)
(connect(mapStateToProps,{companyIndex,commonFetchAdvertMedia,commonFetchAdvertPlaces,commonStoreAdvert,showMainDialog})
(translate('common')(AddNewAdvert)));
