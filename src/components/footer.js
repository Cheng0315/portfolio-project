import React from 'react';
import '../css/footer.css' 
import Fade from 'react-reveal/Fade';

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear()

    return (
      <footer className='footer'>
        <Fade bottom duration={1000} distance={'10px'}>
          <div className="text-center">&copy; {year} Cheng Vue</div>
        </Fade>
      </footer>
    )
  }
}

export default Footer;