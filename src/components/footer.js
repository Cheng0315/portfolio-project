import React from 'react';
import '../css/footer.css' 

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear()

    return (
      <footer className='footer'>
        <div className="text-center">&copy; {year} Cheng Vue</div>
      </footer>
    )
  }
}

export default Footer;