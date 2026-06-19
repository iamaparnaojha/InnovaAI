import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 dark:bg-black text-white py-12">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-xl" />
            <div>
              <p className="font-heading font-black text-white">AI &amp; Robotics</p>
              <p className="text-xs text-gray-400">Summer Workshop 2026</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering the next generation of innovators through hands-on AI and robotics education.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['#home', '#details', '#learn', '#faq', '#register'].map((href) => (
              <li key={href}>
                <a href={href} className="hover:text-primary transition capitalize">
                  {href.replace('#', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📧 <a href="mailto:hello@airoboticsworkshop.in" className="hover:text-primary transition">hello@airoboticsworkshop.in</a></li>
            <li>📞 <a href="tel:+919999999999" className="hover:text-primary transition">+91 99999 99999</a></li>
            <li>🌐 Online · India</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {['📘 Facebook', '📸 Instagram', '🐦 Twitter'].map((s) => (
              <a key={s} href="#" className="text-xs bg-gray-800 hover:bg-primary/20 text-gray-400 hover:text-primary rounded-lg px-2 py-1 transition">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} AI &amp; Robotics Summer Workshop. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
