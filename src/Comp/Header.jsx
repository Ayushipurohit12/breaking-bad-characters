import styled from "@emotion/styled";
import { AppBar, InputBase, Toolbar,Box } from "@mui/material";
import pic from "../image/pic.png";
import SearchIcon from '@mui/icons-material/Search';


const StyleHeader = styled(AppBar)`
background: #000;
padding: 10px;
`
const Component = styled(Box)`
background-color: rgb(255, 255, 255, 0.15);
margin: 0 10px;
border-radius: 5px;
position: relative;

`
const InputBox = styled(InputBase)`
    color: inherit;
    margin: 0 50px; 
    
`
const StyledIcon = styled(SearchIcon)`
    Position: absolute;
    top: 3px;
 margin-left:12px;
`
const  Header = ({ setText }) => {
   const getText = (e) =>{
    setText(e.target.value)
   }
    return(
        <StyleHeader position="static">
            <Toolbar>
            <img src={pic} alt={pic} style={{ width:100 }} />
     <Component>
            <StyledIcon />
              <InputBox 
                placeholder="search by name"
                onChange={ (e) => getText(e) }
               />
      </Component>
      </Toolbar>
        </StyleHeader>
    )
}
export  default Header;