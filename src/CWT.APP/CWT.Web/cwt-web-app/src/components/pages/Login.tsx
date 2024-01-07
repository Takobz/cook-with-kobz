import { Button, Card, CardContent, CardHeader, Divider, Link, TextField } from "@mui/material"
import '../../App.css'
import { useState } from "react";

//loading logic:
//disable textfields and buttons, causing login button to show loading

const Login = () => {   
    const [isLoginLoading, setLoginLoading] = useState(false);
    const handleLogin = () => {
        setLoginLoading(true);

        //use fetch here.
        //recommended to use fetch instead of useEffect
        //because useEffect is for side effects, not for data fetching (even though it can be used for data fetching)
        //useEffect is better when we want to do something when a component is mounted or unmounted.
    }

    return (
        <div className="CenterDiv" style={{ background: 'gray', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
            <Card sx={{ maxWidth: 500, margin: '10px', width: '75%' }} >
                <CardHeader 
                    title='Start Cooking'
                    sx={{ fontWeight: 'bold' }}
                    titleTypographyProps={{ variant:'h4' }}/>
                <CardContent>
                    <TextField id='username' label='Username' variant='outlined' fullWidth sx={{ mb: 2 }}/>
                    <TextField id='password' label='Password' variant='outlined' type='password' fullWidth sx={{ mb: 2 }}/>
                    {isLoginLoading ? 
                    <Button variant="contained" disableElevation sx={{ width: '100%' }} disabled>
                        <b>Login</b>
                    </Button> :
                    <Button variant="contained" disableElevation sx={{ width: '100%' }} onClick={handleLogin}>
                        <b>Login</b>
                    </Button>
                    }
                    <div className="CenterDiv" style={{ textAlign: 'center', margin: '10px'}}>
                        <Link href="#">Forgot Password? Reset</Link>
                    </div>
                    <Divider />
                    <div className="CenterDiv" style={{ textAlign: 'center', margin: '10px' }}>
                        <Button variant="contained" disableElevation sx={{ width: '60%' }} style={{ backgroundColor: 'green' }}>
                            <b>Register</b>
                        </Button>
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    );
}

export default Login