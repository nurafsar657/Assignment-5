import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" />
            </div>
            
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-5 pt-2 text-sm font-semibold text-slate-700">
              <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              PRODUCT
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              LEGAL
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;