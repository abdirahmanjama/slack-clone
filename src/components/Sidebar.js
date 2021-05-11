import React from 'react'
import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarHeaderLeft>
                <h2>Abdi's Dungeon</h2>
                <h3>
                <FiberManualRecordIcon/>
                Abdirahman
                </h3>
                
                </SidebarHeaderLeft>
                <SidebarRight>
                <EditIcon></EditIcon>

                </SidebarRight>
             
            </SidebarHeader>
                     
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
color: white;
flex: 0.3;
max-width: 260px;
margin-top: 60px;

`;

const SidebarHeaderLeft = styled.div`

flex: 1;
>h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}

>h3{
    display: flex;
    padding-right: 10px;
    font-size: 14px; 
    

.MuiSvgIcon-root{
    
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    border-radius: 50%;
    color: green;
    background-color: green;
}
}




`;



const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid grey;
border-top: 1px solid grey;
padding: 13px;






`;

const SidebarRight = styled.div`
.MuiSvgIcon-root {
    color: var(--slack-color);
    background-color: white; 
    border-radius: 50%;
    padding: 8px;
    font-size: 20px;
    cursor: pointer;

}

`;