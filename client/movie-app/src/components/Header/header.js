import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logoBox'>
        <Link to="/" className='logo'><MovieIcon 
        sx={{ fontSize: 64 }} 
        color="primary"/> 
        <span className='logoText'>Lettuce의 영화소개</span >
        </Link>
      </div>  
      <div className='Login'>
        <Link to ="/Login" className='Login'><button>로그인</button></Link>
        <button>회원가입</button>
      </div>
    </div>
  )
}

export default Header;
