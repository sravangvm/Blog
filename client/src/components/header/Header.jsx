
import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: white;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: 'black';
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/' style={{color:'#6A1B9A'}}>HOME</Link>
                <Link to='/about' style={{color:'#6A1B9A'}}>ABOUT</Link>
                <Link to='/contact' style={{color:'#6A1B9A'}}>CONTACT</Link>
                <Link to='/account' style={{color:'red'}}>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;