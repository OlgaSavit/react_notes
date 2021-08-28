import styled, {createGlobalStyle} from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  padding: 16px;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  &:hover {
      opacity: 0.5;
  }
`;
const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const Image = styled.img`
  width:20px;
  height:20px
`;
const Title=styled.h1`
  margin:5px 0;
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
    theme: {
        main: "red"
    }
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color:  ${props => (!props.light ? 'white' : 'black')};
    background-color:  ${props => (props.light ? 'white' : 'black')};
  },

`
const theme = {
    main: "mediumseagreen",
    black:'#000000',
    green:'#04a72e',
    white:'white',
    gray:'#04a72e',
    lightGray:'#737373',
    blue:'#0381c2',
    red:'red'
};
// Define what props.theme will look like

export {theme,Button,GlobalStyle,Title,TransparentButton,Image}