(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[8],{1313:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(7),l=a(9),c=a(11),i=a(12),o=a(0),s=a.n(o),m=a(29),u=a(38),d=a(24),p=a(824),h=a(829),g=a(822),b=a(1315),f=a(782),E=a(809),v=a(780),y=a(1305),w=a(826),j=a(212),O=a.n(j),k=a(825),x=a(23),C=a(213),_=a(15),D=a.n(_),P=a(844),T=a(882),N=a.n(T),R=a(860),B=a.n(R),M=a(968),W=a.n(M),I=a(201),S=a.n(I),L=a(883),A=a.n(L),F=a(842),z=a.n(F),V=[{name:"Dashboard",route:"/auth",icon:s.a.createElement(N.a,null)},{name:"Adverts",route:"/auth/adverts",icon:s.a.createElement(z.a,null)},{name:"My cars",route:"/auth/my_cars",icon:s.a.createElement(B.a,null)},{name:"My tablets",route:"/auth/my_tablets",icon:s.a.createElement(W.a,null)},{name:"Finance",route:"/auth/finance",icon:s.a.createElement(S.a,null)},{name:"Settings",route:"/auth/settings",icon:s.a.createElement(A.a,null)}],H=a(969),J=a(970),X=a(971),G=a(972),U=a(3),Y=a(25),q=a(777),K=a(821),Q=a(91),Z=a(778),$=a(92),ee=a(834),te=a(63),ae=a(974),ne=a(1),re=(a(5),a(4)),le=a(6),ce=["video","audio","picture","iframe","img"],ie=o.forwardRef(function(e,t){var a=e.children,n=e.classes,r=e.className,l=e.component,c=void 0===l?"div":l,i=e.image,s=e.src,m=e.style,u=Object(U.a)(e,["children","classes","className","component","image","src","style"]),d=-1!==ce.indexOf(c),p=!d&&i?Object(ne.a)({backgroundImage:'url("'.concat(i,'")')},m):m;return o.createElement(c,Object(ne.a)({className:Object(re.default)(n.root,r,d&&n.media,-1!=="picture img".indexOf(c)&&n.img),ref:t,style:p,src:d?i||s:void 0},u),a)}),oe=Object(le.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(ie),se=a(119),me=a(194),ue=a(1314),de=a(1299),pe=a(1321),he=a(202),ge=a.n(he),be=a(286),fe=a(66),Ee=a(960),ve=a(776),ye=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e,t){a.setState({value:t})},a.a11yProps=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},a.registerCars=function(){a.props.showCarRegistrationModal(!0)},a.TabPanel=function(e){var t=e.children,a=e.value,n=e.index,r=Object(U.a)(e,["children","value","index"]);return s.a.createElement(te.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),s.a.createElement(pe.a,{style:{paddingLeft:0,paddingRight:0},p:4},t))},a.state={value:0,show:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.a11yProps=a.a11yProps.bind(Object(d.a)(a)),a.TabPanel=a.TabPanel.bind(Object(d.a)(a)),a.registerCars=a.registerCars.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.categoriesFetch()}},{key:"render",value:function(){var e=this.props.classes,t=this.props.t;return s.a.createElement("div",{className:e.root},s.a.createElement(q.a,{style:{borderRadius:0,backgroundColor:"#3C4252",color:"white"}},s.a.createElement(ue.a,{value:this.state.value,onChange:this.handleChange},s.a.createElement(de.a,Object.assign({className:e.tabs,label:"".concat(t("driver.cars.my_cars"))},this.a11yProps(0))),s.a.createElement(de.a,Object.assign({className:e.tabs,label:"".concat(t("driver.cars.cars_rule_and_regulation"))},this.a11yProps(1))))),s.a.createElement(this.TabPanel,{value:this.state.value,index:0},this.props.loading?s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement(ve.a,null)):this.props.categories.length>0?s.a.createElement(Ee.a,{show:!0}):s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},s.a.createElement("span",{style:{marginBottom:20}},"No car is found Registered by you. Start registering your car now"),s.a.createElement(me.a,{color:"primary",variant:"contained",onClick:this.registerCars},s.a.createElement("span",{style:{marginRight:10}},"Register"),s.a.createElement(ge.a,null)))),s.a.createElement(this.TabPanel,{value:this.state.value,index:1},this.props.loading?s.a.createElement(Q.a,{variant:"rect",width:200,height:200}):this.props.categories.map(function(t){return s.a.createElement("div",{key:t.id,className:e.root},s.a.createElement(q.a,{style:{borderRadius:0,marginBottom:20}},s.a.createElement(K.a,{title:t.name,avatar:s.a.createElement(B.a,null)})),t.child.length>0?s.a.createElement($.a,{container:!0,spacing:3},t.child.map(function(e){return s.a.createElement($.a,{key:e.id,item:!0,md:6,xs:12},s.a.createElement(q.a,null,s.a.createElement(K.a,{avatar:s.a.createElement(ee.a,{style:{backgroundColor:se.a[500]}},e.name[0]),title:e.name,subheader:t.name}),s.a.createElement(oe,{style:{height:10,paddingTop:"56%"},image:e.image}),s.a.createElement(Z.a,null,s.a.createElement(te.a,{variant:"body2",color:"textSecondary"},e.description))))})):s.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},s.a.createElement(te.a,{color:"primary"},"There is now registered car under ".concat(t.name))))})))}}]),t}(s.a.Component),we=Object(x.b)("common")(D()(ae.a)(Object(Y.b)(function(e){return{categories:e.authReducer.driversReducers.categoriesData.categories,loading:e.authReducer.driversReducers.categoriesData.loading}},{categoriesFetch:be.a,showCarRegistrationModal:fe.c,sentDialogValue:fe.a})(ye))),je=a(836),Oe=function(e){return{header:{backgroundColor:"#3C4252",color:"white"}}},ke=a(580),xe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).filterAssignedWorkingTabletCars=function(e){return e.filter(function(e){return e.working_tablet.length>0})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.t;return s.a.createElement(q.a,null,s.a.createElement(K.a,{className:t.header,title:"".concat(a("driver.tablet.title"))}),s.a.createElement(g.a,null),s.a.createElement(Z.a,null,this.props.loading?s.a.createElement(ke.a,null):s.a.createElement("div",null,this.filterAssignedWorkingTabletCars(this.props.user.relations.cars).length>0?s.a.createElement($.a,{container:!0,spacing:2},this.filterAssignedWorkingTabletCars(this.props.user.relations.cars).map(function(e){return s.a.createElement($.a,{item:!0,md:4,xs:12,sm:12},s.a.createElement(q.a,null,s.a.createElement(K.a,{title:e.working_tablet[0].serial_number,avatar:s.a.createElement(ee.a,null,"T")}),s.a.createElement(g.a,null),s.a.createElement(Z.a,null,s.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:20}},s.a.createElement(te.a,null,"".concat(a("driver.tablet.total_advert"),":")),s.a.createElement(te.a,null,e.adverts.length)),s.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},s.a.createElement(te.a,null,"".concat(a("driver.tablet.working_car"),":")),s.a.createElement(te.a,null,e.plate_number)))))})):s.a.createElement(te.a,null,"".concat(a("driver.tablet.no_tablet.title"))))))}}]),t}(s.a.Component),Ce=Object(x.b)("common")(D()(Oe)(Object(Y.b)(function(e){return{user:e.userData.user,loading:e.userData.loading}},{me:je.a})(xe))),_e=a(975),De=a(1045),Pe=a(2),Te=function(e){return{cards:Object(Pe.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",paddingTop:20},e.breakpoints.down("xs"),{flexDirection:"column"}),status:Object(Pe.a)({display:"flex",flexDirection:"row",paddingTop:20},e.breakpoints.down("xs"),{flexDirection:"column"}),small_device:Object(Pe.a)({display:"flex"},e.breakpoints.down("xs"),{display:"none"})}},Ne=a(120),Re=function(e){return{header:{backgroundColor:"#3C4252",color:"white"},scroll_wrapper:{display:"flex",flexDirection:"row",overflowX:"auto",wrap:"nowrap",paddingBottom:10},scroll_child:Object(Pe.a)({backgroundColor:Ne.a[500],color:"white",flex:"0 0 auto",marginRight:10,width:"50%"},e.breakpoints.down("xs"),{width:"100%"})}},Be=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).filterCompanies=function(e){var t=[];e.map(function(e){return e.adverts.filter(function(e){t.push(e.detail.company.name)})});var a=t.reduce(function(e,t){return e[t]=++e[t]||1,e},{});return Object.entries(a).sort(function(e,t){return t[1]-e[1]}).slice(0,2).map(function(e){for(var t={},a=0;a<e.length;++a)t[a]=e[a];return t})},a.filterAdvertNumbers=function(e,t){var a=0;return e.map(function(e){return e.adverts.filter(function(e){return e.detail.company.name===t})}).map(function(e){a+=e.length}),a},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.t;return s.a.createElement("div",null,s.a.createElement(q.a,null,s.a.createElement(K.a,{className:e.header,title:this.props.loading?s.a.createElement(Q.a,{style:{backgroundColor:"white"},variant:"rect",width:250,height:6}):t("driver.top_adverted_companies.title")}),s.a.createElement(Z.a,null,this.props.loading?s.a.createElement(s.a.Fragment,null,s.a.createElement(Q.a,{height:6}),s.a.createElement(Q.a,{height:6,width:"80%"})):s.a.createElement("div",{className:e.scroll_wrapper}))))}}]),t}(s.a.Component),Me=Object(x.b)("common")(D()(Re)(Object(Y.b)(function(e){return{user:e.userData.user,loading:e.userData.loading}})(Be))),We=a(976),Ie=a(1301),Se=a(1302),Le=a(1303),Ae=a(1304),Fe=a(1300),ze=function(e){return{big_device:Object(Pe.a)({width:"100%"},e.breakpoints.down("xs"),{display:"none"}),small_device:Object(Pe.a)({display:"none"},e.breakpoints.down("xs"),{display:"flex"}),search:Object(Pe.a)({display:"flex"},e.breakpoints.down("xs"),{display:"none"}),tableWrapper:{overflowX:"auto"},card_header:Object(Pe.a)({},e.breakpoints.down("xs"),{backgroundColor:"#3C4252",color:"white"})}},Ve=D()(function(e){return{head:{backgroundColor:"#3C4252",color:e.palette.common.white},body:{fontSize:14}}})(Fe.a),He=[{id:"company_name",label:"Plate number",minWidth:170},{id:"phone_no",label:"Total adverts",align:"right",format:function(e){return e.toLocaleString()}}],Je=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={page:0,rowsPerPage:10},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,this.props.loading?s.a.createElement(Q.a,{variant:"rect",width:"100%",height:"500"}):s.a.createElement(q.a,null,s.a.createElement(K.a,{className:e.card_header,title:"Your adverts"}),s.a.createElement(Z.a,null,s.a.createElement("div",{className:e.tableWrapper},s.a.createElement(Ie.a,null,s.a.createElement(Se.a,null,s.a.createElement(Le.a,null,He.map(function(e){return s.a.createElement(Ve,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)}))),s.a.createElement(Ae.a,null,this.props.user.relations.cars.map(function(e){return s.a.createElement(Le.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},s.a.createElement(Fe.a,{key:"company_name"},e.plate_number),s.a.createElement(Fe.a,{key:"phone",align:He[1].align},e.adverts))})))))))}}]),t}(s.a.Component),Xe=(D()(ze)(Object(Y.b)(function(e){return{user:e.userData.user,loading:e.userData.loading}})(Je)),a(979)),Ge=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement($.a,{container:!0,spacing:2,className:e.cards},s.a.createElement($.a,{item:!0,md:3,sm:12},s.a.createElement(_e.a,null)),s.a.createElement($.a,{item:!0,md:3,sm:12},s.a.createElement(Xe.a,null)),s.a.createElement($.a,{item:!0,md:3,sm:12},s.a.createElement(De.a,null)),s.a.createElement($.a,{item:!0,md:3,sm:12},s.a.createElement(We.a,null))),s.a.createElement($.a,{container:!0,spacing:2,className:e.status},s.a.createElement($.a,{item:!0,md:12,sm:12},s.a.createElement(Ee.a,{show:!1})),s.a.createElement($.a,{item:!0,md:12,sm:12},s.a.createElement(Me,null))),s.a.createElement($.a,{container:!0,spacing:2},s.a.createElement($.a,{item:!0,md:12,xs:12,className:e.small_device})))}}]),t}(s.a.Component),Ue=D()(Te)(Ge),Ye=a(907),qe=a(1042),Ke=a(1298),Qe=function(e){return{header:{backgroundColor:"#3C4252",color:"white",borderRadius:0},cards:{backgroundColor:Ke.a[500],color:"white"},cardContent:{paddingLeft:5,paddingRight:5},dividers:{}}},Ze=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).fileterByWeek=function(e,t){return e.adverts.filter(function(e){return e.weeks[0].week_no===t})},a.mediaType=function(e,t){return e.filter(function(e){return e.detail.advert_media_type.name===t}).length},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cars,a=this.props.classes,n=this.props.t;return s.a.createElement(q.a,null,s.a.createElement(K.a,{className:a.header,style:{},title:n("driver.adverts.week.title")}),s.a.createElement(Z.a,null,s.a.createElement($.a,{container:!0,spacing:2},t.map(function(t){return s.a.createElement($.a,{key:t.id,item:!0,md:6,xs:12},s.a.createElement(q.a,null,s.a.createElement(K.a,{title:"".concat(n("driver.adverts.week.plate_number"),": ").concat(t.plate_number)}),s.a.createElement(g.a,null),s.a.createElement(Z.a,null,null===t.week?s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement(te.a,null,"No adverts in this week.")):s.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.a.createElement(te.a,null,"".concat(n("driver.adverts.week.plate_number"),": ").concat(e.fileterByWeek(t,t.week.week_no).length)),s.a.createElement(te.a,{variant:"h5",gutterBottom:!0,style:{color:"#242424"}},"Media"),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"start"}},s.a.createElement(te.a,null,"".concat(n("driver.adverts.week.video"),": ").concat(e.mediaType(e.fileterByWeek(t,t.week.week_no),"Video"))),s.a.createElement(g.a,{orientation:"vertical",style:{display:"flex",justifyContent:"center",alignItems:"end",marginLeft:8,marginRight:8,height:20,backgroundColor:"white"}}),s.a.createElement(te.a,null,"".concat(n("driver.adverts.week.audio"),": ").concat(e.mediaType(e.fileterByWeek(t,t.week.week_no),"Audio"))),s.a.createElement(g.a,{orientation:"vertical",style:{display:"flex",justifyContent:"center",alignItems:"end",marginLeft:8,marginRight:8,height:20,backgroundColor:"white"}}),s.a.createElement(te.a,null,"".concat(n("driver.adverts.week.image"),": ").concat(e.mediaType(e.fileterByWeek(t,t.week.week_no),"Image"))))))))}))))}}]),t}(s.a.Component),$e=(Object(x.b)("common")(D()(Qe)(Ze)),a(817)),et=function(e){return{header:{backgroundColor:"#3C4252",color:"white",borderRadius:0},card:{backgroundColor:$e.a[500],color:"white"},cardContent:{paddingLeft:5,paddingRight:5}}},tt=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.cars,t=this.props.classes,a=this.props.t;return s.a.createElement(q.a,null,s.a.createElement(K.a,{className:t.header,title:a("driver.adverts.total.title")}),s.a.createElement(Z.a,null,s.a.createElement($.a,{container:!0,spacing:2},e.map(function(e){return s.a.createElement($.a,{key:e.id,item:!0,md:6,xs:12},s.a.createElement(q.a,null,s.a.createElement(K.a,{title:"".concat(a("driver.adverts.total.plate_number"),": ").concat(e.plate_number)}),s.a.createElement(g.a,null),s.a.createElement(Z.a,null,s.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.a.createElement(te.a,null,"".concat(a("driver.adverts.total.total_advert"),": ").concat(e.adverts)),s.a.createElement(te.a,{variant:"h5",gutterBottom:!0,style:{color:"white"}},"Media")))))}))))}}]),t}(s.a.Component),at=(Object(x.b)("common")(D()(et)(tt)),function(e){return{cards:Object(Pe.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",paddingTop:20,marginBottom:10},e.breakpoints.down("xs"),{flexDirection:"column"}),item:Object(Pe.a)({backgroundColor:Ke.a[500],color:"white",width:"50%"},e.breakpoints.down("xs"),{width:"100%"}),expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}),nt=a(157),rt=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleExpandClick=function(e){return function(t){if((!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&(a.setState({id:e}),a.state.id===e)){var n=a.state.expanded;a.setState({expanded:!n})}}},a.filterTodayData=function(e,t){return e.filter(function(e){return e.created_at===t})},a.mediaType=function(e,t){return e.filter(function(e){return e.detail.advert_media_type.name===t}).length},a.state={id:"",expanded:!1},a.filterTodayData=a.filterTodayData.bind(Object(d.a)(a)),a.handleExpandClick=a.handleExpandClick.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){this.props.today;var e=this.props.cars,t=(this.props.classes,this.props.t);return s.a.createElement(q.a,null,s.a.createElement(K.a,{style:{backgroundColor:"#3C4252",color:"white",borderRadius:0},title:t("driver.adverts.today.title")}),s.a.createElement(Z.a,null,s.a.createElement($.a,{container:!0,spacing:2},e.map(function(e){return s.a.createElement($.a,{item:!0,md:3,lg:3,xs:12,key:e.plate_number},s.a.createElement(q.a,null,s.a.createElement(K.a,{title:s.a.createElement(te.a,{variant:"h6",gutterBottom:!0},e.plate_number),subheader:e.car_category[0].name,avatar:s.a.createElement(ee.a,null,e.car_category[0].name.charAt(0))}),s.a.createElement(g.a,null),s.a.createElement(Z.a,null,e.adverts<=0?s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement(te.a,null,"No ads found. have you sent your today's data")):s.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.a.createElement(te.a,null,"".concat(t("driver.adverts.today.total_advert"),": ").concat(e.adverts)),s.a.createElement(te.a,{variant:"h5",gutterBottom:!0,style:{color:nt.a[500]}},t("driver.adverts.today.media")),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"start"}},s.a.createElement(te.a,null,"".concat(t("driver.adverts.today.video"),": ").concat(e.advert_info.video)),s.a.createElement(g.a,{orientation:"vertical",style:{display:"flex",justifyContent:"center",alignItems:"end",marginLeft:8,marginRight:8,height:20,backgroundColor:"white"}}),s.a.createElement(te.a,null,"".concat(t("driver.adverts.today.audio"),": ").concat(e.advert_info.audio)),s.a.createElement(g.a,{orientation:"vertical",style:{display:"flex",justifyContent:"center",alignItems:"end",marginLeft:8,marginRight:8,height:20,backgroundColor:"white"}}),s.a.createElement(te.a,null,"".concat(t("driver.adverts.today.image"),": ").concat(e.advert_info.image))),s.a.createElement(me.a,{color:"primary",variant:"text",style:{textTransform:"none",marginTop:20}},"Show details")))))}))))}}]),t}(s.a.Component),lt=Object(x.b)("common")(D()(at)(rt)),ct=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleChangePage=function(e,t){},a.handleChangeRowsPerPage=function(e){var t=(a.state[t]+e.target.value).rowsPerPage;a.setState(t),a.setState({rowsPerPage:t})},a.handleChangePage=a.handleChangePage.bind(Object(d.a)(a)),a.handleChangeRowsPerPage=a.handleChangeRowsPerPage.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.me()}},{key:"render",value:function(){this.props.classes;return s.a.createElement("div",null,this.props.loading?s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement(ve.a,null)):s.a.createElement($.a,{container:!0,spacing:2},s.a.createElement($.a,{item:!0,md:12,xs:12},s.a.createElement(lt,{today:this.props.user.helpers.today_date,cars:this.props.user.relations.cars}))))}}]),t}(s.a.Component),it=D()(ze)(Object(Y.b)(function(e){return{user:e.userData.user,loading:e.userData.loading}},{me:je.a})(ct)),ot=a(962),st=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){return s.a.createElement(u.a,{to:"/",push:!0})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.d,null,s.a.createElement(u.b,{path:"/auth",component:Ue,exact:!0}),s.a.createElement(u.b,{path:"/auth/my_cars",component:we}),s.a.createElement(u.b,{path:"/auth/my_tablets",component:Ce}),s.a.createElement(u.b,{path:"/auth/settings",component:Ye.a}),s.a.createElement(u.b,{path:"/auth/finance",component:qe.a}),s.a.createElement(u.b,{path:"/auth/adverts",component:it}),s.a.createElement(u.b,{path:"/auth/car_owner/notifications",component:ot.a})))}}]),t}(s.a.Component),mt=a(831),ut=a(820),dt=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(q.a,{style:{marginBottom:20}},s.a.createElement(Z.a,{style:{display:"flex",flexDirection:"row",paddingBottom:10,paddingTop:10}},s.a.createElement(te.a,{component:"p",variant:"h6"},this.props.currentPage),s.a.createElement("div",{style:{display:"flex",flexGrow:1}}),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},s.a.createElement("span",null,"App"),s.a.createElement(ge.a,null),s.a.createElement("span",{style:{textDecoration:"none"}},this.props.currentPage))))}}]),t}(s.a.Component),pt=a(981),ht=a.n(pt),gt=a(68),bt=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleDrawerToggle=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&a.setState({mobileOpen:e,currentPage:t})}},a.state={mobileOpen:!1,currentPage:"Dashboard"},a.handleDrawerToggle=a.handleDrawerToggle.bind(Object(d.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.me()}},{key:"render",value:function(){var e=this,t=this.props.container,a=this.props.classes,n=this.props.t,r=s.a.createElement("div",{className:a.drawerRoot},s.a.createElement(p.a,{style:{position:"relative",backgroundColor:"#1E221E"}},s.a.createElement(k.a,{style:{padding:5}},s.a.createElement(G.a,null))),s.a.createElement("div",null,this.props.loading?s.a.createElement(Q.a,{variant:"rect",style:{marginLeft:20,marginTop:20,backgroundColor:"white",borderRadius:5},width:100,height:15}):s.a.createElement(te.a,{style:{paddingLeft:20,paddingTop:20,color:gt.a[500]}},this.props.user.relations.role[0].name),s.a.createElement(E.a,null,V.map(function(t){return s.a.createElement(v.a,{button:!0,component:m.b,to:t.route,key:t.name,onClick:e.handleDrawerToggle(!1,t.name),className:a.parent},s.a.createElement(y.a,{style:{color:"white"}},t.icon),s.a.createElement(w.a,{primary:n("driver.drawer_menu.".concat(t.name))}))}))),s.a.createElement(g.a,null));return s.a.createElement("div",{className:a.root},s.a.createElement(h.a,null),s.a.createElement(p.a,{position:"fixed",className:a.appBar,color:"primary"},s.a.createElement(k.a,null,s.a.createElement(f.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:this.handleDrawerToggle(!0,this.state.currentPage),className:a.menuButton},s.a.createElement(O.a,null)),s.a.createElement(m.b,{to:"/",className:a.logo},s.a.createElement("img",{alt:"Tablet Promotions",src:ht.a,width:"32",height:"32",className:a.brandIcon})),s.a.createElement(te.a,{className:a.app_name},n("home.app_name")),s.a.createElement("div",{className:a.grow}),s.a.createElement(H.a,null),s.a.createElement(J.a,null),s.a.createElement("div",{className:a.profile},s.a.createElement(X.a,null)))),s.a.createElement("nav",{className:a.drawer},s.a.createElement(b.a,{smUp:!0,implementation:"css"},s.a.createElement(mt.a,{container:t,variant:"temporary",anchor:"rtl"===C.a.direction?"right":"left",open:this.state.mobileOpen,onOpen:this.handleDrawerToggle(!0,this.state.currentPage),onClose:this.handleDrawerToggle(!1,this.state.currentPage),classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},r)),s.a.createElement(b.a,{xsDown:!0,implementation:"css"},s.a.createElement(mt.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:this.state.mobileOpen,onOpen:this.handleDrawerToggle(!0,this.state.currentPage),onClose:this.handleDrawerToggle(!1,this.state.currentPage)},r))),s.a.createElement("main",{className:a.content},s.a.createElement("div",{className:a.toolbar}),s.a.createElement(ut.a,{maxWidth:"lg"},s.a.createElement(dt,{currentPage:this.state.currentPage}),s.a.createElement(st,null))))}}]),t}(s.a.Component),ft=D()(P.a)(Object(x.b)("common")(Object(Y.b)(function(e){return{user:e.userData.user,loading:e.userData.loading}},{me:je.a})(bt))),Et=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(m.a,null,s.a.createElement(u.d,null,s.a.createElement(u.b,{path:"/auth",component:ft})))}}]),t}(s.a.Component);t.default=Object(u.g)(Et)},968:function(e,t,a){"use strict";var n=a(50);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(80)).default)(r.default.createElement("path",{d:"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"}),"Tablet");t.default=l}}]);
//# sourceMappingURL=8.3d2b978b.chunk.js.map