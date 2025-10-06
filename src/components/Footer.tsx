import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Al Zahra Landscaping</h3>
            <p className="text-sm opacity-90 mb-4">
              Transforming Dubai's outdoor spaces into luxurious havens with expert landscaping and construction services.
            </p>
            <p className="text-sm opacity-75">
              CEO: Inayat Ullah
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="opacity-90 hover:opacity-100 transition-opacity">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/villa-landscaping" className="opacity-90 hover:opacity-100 transition-opacity">
                  Villa Landscaping
                </Link>
              </li>
              <li>
                <Link to="/services/garden-design" className="opacity-90 hover:opacity-100 transition-opacity">
                  Garden Design
                </Link>
              </li>
              <li>
                <Link to="/services/lawn-care" className="opacity-90 hover:opacity-100 transition-opacity">
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/irrigation" className="opacity-90 hover:opacity-100 transition-opacity">
                  Irrigation Systems
                </Link>
              </li>
              <li>
                <Link to="/services/trimming" className="opacity-90 hover:opacity-100 transition-opacity">
                  Plant Trimming
                </Link>
              </li>
              <li>
                <Link to="/services/construction" className="opacity-90 hover:opacity-100 transition-opacity">
                  Outdoor Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+971555604136" className="opacity-90 hover:opacity-100 transition-opacity">
                  +971 55 560 4136
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@al-zahralandscaping.com" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@al-zahralandscaping.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Sun - Thu: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Al Zahra Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
