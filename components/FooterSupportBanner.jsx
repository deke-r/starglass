const FooterSupportBanner = ({
    text = "Always Ready to Help You 24/7",
    textAlign = "text-center",
    headingTag: HeadingTag = "h2",
  }) => {
    return (
      <div className='container-fluid text-light' style={{backgroundColor:'#174EC1'}}>
        <div className="row">
          <div className="col-12">
            <div className={`support-text py-4 ${textAlign}`}>
              <HeadingTag>{text}</HeadingTag>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterSupportBanner;
  