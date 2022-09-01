import './Footer.css';
import { AiFillInstagram } from 'react-icons/ai'; 


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="connections">
                    <a href="/#" id="instaIcon"><AiFillInstagram /></a>
                    
                </div>
                   All Rights Reserved &copy; 2022 &#8226;
                <a href="https://github.com/Angel-Sky/ReactJS-Project" target="_blank" rel="noreferrer"> Policy</a>
            </div>
        </footer >
    )
}

export default Footer;