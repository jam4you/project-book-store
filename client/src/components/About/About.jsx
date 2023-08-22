import './About.css';
import { Link } from 'react-router-dom';

import about from '../../assets/banner.jpg';

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="about_image">
                <img height='100%' width='100%' src={about} alt="about" />
            </div>
            <div className="about_text">
                <h1>about us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil omnis magnam facilis molestias corporis at natus quos, magni repellendus?</p>
                <Link to=''>read more</Link>
            </div>
        </div>
        <div className="question">
            <div className="question_text">
                <h1>have any question?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam veritatis repudiandae ipsa enim temporibus eligendi obcaecati veniam nihil sint ratione labore.</p>
                <Link to=''>contact us</Link>
            </div>
        </div>
    </div>
  )
}

export default About