const adminAdvertStyle = theme=>({
    table: {
        display: 'flex',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    tabs:{
        textTransform:'none'
    },
    newAdvertButton:{
        textTransform:"none",
        position:"fixed",
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            display: 'none'
        }
    }
})

export default adminAdvertStyle
