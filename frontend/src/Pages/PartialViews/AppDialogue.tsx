import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as DialogueActionCreators from '../../Actions/DialogueAction';
import jwt from "jsonwebtoken";

const AppDialogue = () => {
    const dialogueAction: any = useSelector((state: any) => state.dialogue);
    const dispatch = useDispatch();
    const { DialogueAction } = bindActionCreators(DialogueActionCreators, dispatch);

    const handleClose = () => {
        DialogueAction(false);
    };

    const handleOk = async () => {
        try {
            let json: any = localStorage.getItem('user');
            let getUser: any = JSON.parse(json);
            const { token, exp, iat, ...other } = getUser;
            console.log(other);
            let refreshToken = await jwt.sign(other, 'token', { expiresIn: '2m' });
            const user: any = { ...other, token: refreshToken }
            localStorage.setItem('user', JSON.stringify(user));
            console.log('expired');
            DialogueAction(false);
        }
        catch (error: any) {
            console.log(error);
        }
    };
    return (
        <Dialog
            open={dialogueAction}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Confirm
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your session will expire. Please press ok to continue
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleOk} autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default AppDialogue;