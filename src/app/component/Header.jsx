// components/Header.js
import '@/app/component/css/Header.css'

const Header = () => {
  return (
    <div className='container'>
       <nav>
       <img src=''className='logo'></img>
       <ul> 
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>Talent Pool</a></li>
            <li><a href='#'>Add Buddy</a></li>
            <li><a href='#'>Login</a></li>
            <img src=''className='account_img'></img>
       </ul>
       </nav>
    </div>
  );
};

export default Header;
