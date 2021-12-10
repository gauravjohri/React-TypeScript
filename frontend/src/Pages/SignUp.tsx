import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import SignUpHandler from "../Handlers/SignUpHandler";
import { SignUpState } from "../Interfaces/SignUpState";
import { boxStyle } from "../Styles/Box";
import GlobalMessages from "./PartialViews/GlobalMessages";
import moment from 'moment';
const SignUp = () => {
    const signUpState = useSelector((state: SignUpState) => state.signup);
    const { handleChange, handleSignup } = SignUpHandler();
    const currentDate = moment().format('YYYY-MM-DD');
    return (
        <Container fixed>
            <Box sx={boxStyle} component="span" m={1}>
                <h1 id="heading">Signup Page</h1>
                <GlobalMessages errors={signUpState.user} ></GlobalMessages>
                <form onSubmit={handleSignup}>
                    <TextField id="standard-basic" label="Username" name="username" onChange={handleChange} /><br />
                    <TextField id="standard-basic" type="date" name="dob" value={currentDate} onChange={handleChange} /><br />
                    <TextField id="standard-basic" type="password" label="Password" name="password" onChange={handleChange} /><br />
                    <Button variant="contained" type="submit">Register</Button>
                </form>
            </Box>
        </Container>
    )
}
export default SignUp;