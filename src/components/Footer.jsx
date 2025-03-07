import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark-light py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-primary text-xl font-bold hover:text-primary-dark transition-colors">CyberDefend</h3>
            </Link>
            <p className="text-gray-400 mt-4">
              Protecting your digital assets with cutting-edge security solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Physical Security
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  Security Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-dark rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-dark rounded-full"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-dark rounded-full"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} CyberDefend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer