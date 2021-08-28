import styled from 'styled-components'
const LogoutButton = styled.button`
  font-size: 14px;
  padding: 8px;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.green};
  &:hover {
    background-color: ${props => props.theme.green};
  }
`;
const HeaderContainer=styled.div`
    padding: 8px;
    background-color: ${props=> props.theme.blue};
    color:  ${props=> props.theme.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`;
export {LogoutButton,HeaderContainer}