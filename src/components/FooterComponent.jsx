function FooterComponent() {

    return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright text-center ">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Group-3</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="credits">
            <a>Designed by Group-3</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default FooterComponent