import React from 'react';
import "./Header.css";
import TinderLogo from './images/tinder.png';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img src={TinderLogo} alt="" className='header__logo' />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>

        </div>
    )
}

export default Header;
