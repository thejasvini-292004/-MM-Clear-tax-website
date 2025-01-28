import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white">
      <div
        className="bg-blue-900 py-10"
        style={{
          backgroundImage:
            "url('https://cleartaxfiler.com/old/img/bg/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <p className="text-sm leading-relaxed text-blue-200">
              At Clear Tax Filer, we understand that tax filing can be a complex
              and tedious task. That's why we have assembled a team of dedicated
              and experienced professionals who are committed to providing our
              clients with superior service.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center"
              >
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>US Individual
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>Business
                  Incorporation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>Business Tax
                  Filings
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  <span className="text-yellow-500">+ </span>Indian Tax Filings
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.5609361181534!2d-122.08385168468884!3d37.38747497982792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5be10e73501%3A0x4bfa1639ba6a7cd2!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1631324933222!5m2!1sen!2sus"
              width="100%"
              height="200"
              className=""
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className="text-blue-900 text-sm py-4"
        style={{ backgroundColor: "#ffb600" }}
      >
        <div className="container mx-auto px-5 flex justify-between">
          <p>Copyright © Clear Tax Filer 2023. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-900">
              Privacy Policy
            </a>
            <span>●</span>
            <a href="#" className="hover:text-blue-900">
              Terms & Conditions
            </a>
            <span>●</span>
            <a href="#" className="hover:text-blue-900">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
