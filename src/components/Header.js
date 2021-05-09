import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
       <HeaderContainer>
           {/*/Header Left*/}
           <HeaderLeft>
            <HeaderAvatar 
            // TODO: Add onClick and src 
            />
            <AccessTimeIcon/>

           </HeaderLeft>

           {/* Header Search */}

           <HeaderSearch>
               <SearchIcon/>
               <input placeholder="Search"></input>
           </HeaderSearch>

           {/* Header Right */}

           <HeaderRight>
           
            <HelpOutlineIcon/>
           </HeaderRight>

       </HeaderContainer>
    );
}

export default Header

const HeaderRight = styled.div`
display: flex;
align-items: flex-end;
flex: 0.3;



> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
}

`

const HeaderSearch = styled.div`
flex: 0.6;
display: flex;
padding: 0 50px;
flex-direction: row;
border-radius: 6px;
background-color: #421f44;
text-align: center;
border: 1px gray solid;
color: grey;

> input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vh;
    outline: none;
    color: white;
}

`

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: var(--slack-color);
    color: white;
    padding: 10px;

`

const HeaderLeft = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
flex: 0.3;
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root { //targets material ui icon directly
    margin-left: auto;
    margin-right: 30px;
}
`

const HeaderAvatar = styled(Avatar)`

    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`

