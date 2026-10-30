import "../../components/Footer.css";

function SupportFooter() {
  return (
    <footer className="bg-light border-top pt-3 mt-1">
      <div className="container p-4">
        <div className="row">
          <div className="col-md">
            <img
              src="/media/images/logo.svg"
              className="footerLogo"
              alt="Footer Logo Img"
            />
            <p className="f-number mb-2">
              <svg
                className="mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                color={"#000000"}
                fill={"true"}
              >
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="number">080 47181888</span>
            </p>
            <p className="f-copyrightInfo">
              &copy; 2010 - 2024, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <p className="f-socialMediaIcons">
              <a href="https://x.com/zerodhaonline" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/zerodha.social" target="_blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/zerodhaonline/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/zerodha"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </p>
          </div>
          <div className="col-md">
            <h5>Company</h5>
            <div className="f-mainLinks">
              <a href="#">About</a>
              <br />
              <a href="#">Products</a>
              <br />
              <a href="#">Pricing</a>
              <br />
              <a href="#">Referral programme</a>
              <br />
              <a href="#">Careers</a>
              <br />
              <a href="#">Press & media</a>
              <br />
              <a href="#">Zerodha Cares (CSR)</a>
            </div>
          </div>
          <div className="col-md">
            <h5>Support</h5>
            <div className="f-mainLinks">
              <a href="#">Contact us</a>
              <br />
              <a href="#">Support portal</a>
              <br />
              <a href="#">Z-Connect blog</a>
              <br />
              <a href="#">List of charges</a>
              <br />
              <a href="#">Downloads & resources</a>
            </div>
          </div>
          <div className="col-md">
            <h5>Account</h5>
            <div className="f-mainLinks">
              <a href="#">Open an account</a>
              <br />
              <a href="#">Fund transfer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SupportFooter;
