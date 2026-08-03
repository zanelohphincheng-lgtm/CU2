import { Alert, Button, Snackbar } from "@mui/material"
import { useState } from "react"

const NotificationSystem = () => {
    const [open, setOpen] = useState(false)
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {/* Using 'primary' and 'secondary' on severity will use a lighter color on the palette as design */}
            {/* Same goes to colors like warning, success, info if "varient='filled'" is not in it */}
            <Alert severity='warning'>Your subscription will expire soon!</Alert>
            {/* The variant is either 'outlined' and 'contained' based on your PRIMARY color */}
            <Button variant='contained' onClick={() => setOpen(true)}>Save Changes</Button>

            <Snackbar 
                open={open} 
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>Changes Saved Successfully</Alert>
            </Snackbar>
        </div>
    )
}

export default NotificationSystem