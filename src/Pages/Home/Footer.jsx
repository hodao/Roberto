import react from "react"
import "./Footer.css"

export default function Footer() {
  return (



<footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo"></h1>
        
    <img src="https://scontent.fcmh1-1.fna.fbcdn.net/v/t39.30808-6/310554146_159438173397714_7013024384196446488_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nn4TQgZxaE8AX9e9UVJ&_nc_ht=scontent.fcmh1-1.fna&oh=00_AfDeL5uos2NMssJUwLBgeO23kVU9isEZ-26PTV4Z6W78GA&oe=63A6BB82" width="40px" height="40px" alt=""/>
    
    <address>
      Roberto's Heart<br/>
          
      <a className="footer__btn" href="mailto:example@gmail.com">Contact Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Services</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Next Steps</a>
        </li>

        <li>
          <a href="#">Legal Support</a>
        </li>
            
        <li>
          <a href="#">Our Partners</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Resources</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#">Roberto's Directory</a>
        </li>
        
        <li>
          <a href="#">---</a>
        </li>
        
        <li>
          <a href="#">---</a>
        </li>
        
        <li>
          <a href="#">---</a>
        </li>
        
        <li>
          <a href="#">---</a>
        </li>
        
        <li>
          <a href="#">---</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2018 Roberto's Heart. All rights reserved.</p>
    
    <div className="legal__links">
      <span> <span className="heart"></span> </span>
    </div>
  </div>
</footer>
  );
}