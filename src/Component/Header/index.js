
import './header.css';
const Header =({closeModal}) => {

  return (
    <div className='header'>
          
            <i className="bi bi-x-lg "  
            onClick={() => {
              closeModal(false);
            }}></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg header-icon"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            <p className='header-p'>who is staying</p>
           
          </div>
  );
};
export default Header;