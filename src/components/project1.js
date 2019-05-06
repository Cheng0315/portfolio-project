import React from 'react';
import '../css/projects.css' 
import Media from 'react-bootstrap/Media'

class Project1 extends React.Component {
  
  render() {
    return (
      <div className='project container'>
        <div className='row'>
          <div className='project-img col-lg-4'>
            <img src='https://00e9e64bacd934b0d34dd672fd1bd3d11a86a57f7916e522c1-apidata.googleusercontent.com/download/storage/v1/b/swift-kart-app/o/swift_kart.png?qk=AD5uMEu3wWbPdkox8gZ7FEn3mC2f1ht25kKqX_ctRTKfB5rLUv7y0IUw7r4YxDRRAW-k03AFoYzOlkR2HFTbFEXpAfG7bJixs-LBsF0pxqggUogsfAcpMLA9PUkYe2vYk1g2vS62UPjL4ugnNeijLDN2GL2C9BmFxAGdJWbMsjpaLWnVau8vkeNJYfnKh5r91Eq8kx-C1HuvZRXY5vmERuRM41h5qsSCEdbQHehmbkAayHjIh-_peieqC1a5xEVksUs18bypCrPdfFx8LfP-Z-lPRPQr5wYy_Lf1kDvu8vNrm3ekG948YpkfLbBXNqZmtGKn5MATEHHhCbZmZlVbtW-_WSrUnBFc7EU9EjhddPH87mKe5KXz58B0c1bAylnOViHj_3BzUVsC1JbQsK_1lBNlO7YqoTCxTBVq_9FHfwXOfr7q5zjlD_j4nqIxc0-IYZFTi7wf2AO1bgJT45ObynqZRNjk7C25XlkG65zga7KQf3d8KDL-Pqm9TImeoVJB_hxMuI2V_Fy7VFUX4xTfmNJYeX-wW8SmuGr51kmP7zo6Trc-buZO4IMNkhB5-COTNOfGUAEOOj_bpbkr5tLO2OU53PTtwxNvXLBbj3AsFIZ8XmClmlgBuYzlWn7Bhf5C0Z-Dt9ft7NrOQ-aXNBmQZyzZ-8Xixud7HZS15thJlG-p5MaHCE-KbjJxQzUKax8VrXW7pRl56YgSKYHuTQmhqnrRk0J-YrNcEyfnNlxD9knuOBWE1UGnJgV20_wnoJHkf0LdA0imhRI1N2oVCEdoH_CfCVFxQ67BeA'/>
          </div>
          <div className='project-info col-lg-8'>
            <h3>Swift-Kart</h3>
            <div>E-commerce application where users can buy and sell items</div>
            <div>Technologies Used: Ruby, Rails, Javascript, HTML5, CSS3, jQuery, Bootstrap 4, Handlebars, MVC, OAuth and API</div>
            <div>Constructed the application using Ruby on Rails and MVC pattern</div>
            <div>Integrated jQuery and AJAX to load data from the server without page refresh</div>
            <div>Utilized OmniAuth for Oauth authentication with Facebook</div>
            <div></div>
          </div>
        </div> 
    </div>
    )
  }
}

export default Project1