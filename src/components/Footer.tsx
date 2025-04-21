
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Support',
      links: [
        { label: 'Help Center', url: '#' },
        { label: 'AirCover', url: '#' },
        { label: 'Anti-discrimination', url: '#' },
        { label: 'Disability support', url: '#' },
        { label: 'Cancellation options', url: '#' },
      ],
    },
    {
      title: 'Hosting',
      links: [
        { label: 'Airbnb your home', url: '#' },
        { label: 'AirCover for Hosts', url: '#' },
        { label: 'Hosting resources', url: '#' },
        { label: 'Community forum', url: '#' },
        { label: 'Hosting responsibly', url: '#' },
      ],
    },
    {
      title: 'Airbnb',
      links: [
        { label: 'Newsroom', url: '#' },
        { label: 'New features', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Investors', url: '#' },
        { label: 'Gift cards', url: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-base mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.url} className="text-sm text-gray-600 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-200">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-700">© 2025 Airbnb, Inc.</span>
            <span className="text-sm text-gray-700">·</span>
            <Link to="#" className="text-sm text-gray-700 hover:underline">
              Privacy
            </Link>
            <span className="text-sm text-gray-700">·</span>
            <Link to="#" className="text-sm text-gray-700 hover:underline">
              Terms
            </Link>
            <span className="text-sm text-gray-700">·</span>
            <Link to="#" className="text-sm text-gray-700 hover:underline">
              Sitemap
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="font-semibold text-sm mr-2">English (US)</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-sm mr-2">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
