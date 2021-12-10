import { Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import LoginHandler from '../Handlers/LoginHandler';
import HigherOrderComponent from '../HOC/HigherOrderComponent';
import { boxStyle } from '../Styles/Box';
import Home from './Home';
import GlobalMessages from './PartialViews/GlobalMessages';
import SignUp from './SignUp';

const Login = () => {
    const { handleLogin, handleLoginChange, userData } = LoginHandler();
    const NewComponent = HigherOrderComponent(Home);

    return (
        <Container fixed>
            <Box sx={boxStyle} component="span" m={1}>
                <h1 id="heading">Login Page</h1>
                <NewComponent dd={`sd`} />
                <GlobalMessages errors={userData} />
                <form onSubmit={handleLogin}>
                    <TextField id="standard-basic" label="Username" name="username" onChange={handleLoginChange} /><br />
                    <TextField id="standard-basic" type="password" label="Password" name="password" onChange={handleLoginChange} /><br />
                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </Box>
        </Container>
    )
}
export default Login;