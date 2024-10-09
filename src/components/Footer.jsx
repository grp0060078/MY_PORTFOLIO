//Footer.jsx

// import React from 'react';
// import "../App.css"

// function Footer() {
//   return (
//     <footer>
//       <div className="footer_bg">
//         <div className="footer_container container">
//           <div className="main_footer">
//             <div className="footer_copy">&#169; Rajapandi. All rights reserved</div>
//           </div>
//           <div className="update">
//             <p>Last Updated on : 09.10.2024</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import "../App.css"

function Footer() {
  // Get today's date
  const today = new Date();
  
  // Format the date as DD.MM.YYYY
  const formattedDate = today.toLocaleDateString('en-GB').replace(/\//g, '.');

  return (
    <footer>
      <div className="footer_bg">
        <div className="footer_container container">
          <div className="main_footer">
            <div className="footer_copy">&#169; Rajapandi. All rights reserved</div>
          </div>
          <div className="update">
            <p>Last Updated on: {formattedDate}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
