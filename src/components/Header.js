import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
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

           {/* Header Right */}

       </HeaderContainer>
    );
}

export default Header

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

> .MultiSvgIcon root { //targets material ui icon directly
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

