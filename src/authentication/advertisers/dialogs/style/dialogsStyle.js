const dialogStyle = theme=>({
    groups:{
        display:'flex',
        flexDirection:'row'
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    dialog_title:{
        display: 'flex',
    },
    appBar:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display: 'flex'
        }
    },
    content:{
        [theme.breakpoints.down('xs')]:{
            padding: 20
        }
    },
    form:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            justifyContent:'start',
            alignItems:'center',
        }
    },
    formControl:{
        margin: theme.spacing(1),
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            width: '100%'
        }
    },
    text_input:{
        width:'100%',
        marginBottom:20
    },
    input: {
        display: 'none',
    },
})

export default dialogStyle