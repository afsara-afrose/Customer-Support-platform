import React from "react";
import {  Facebook, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="w-11/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-white mb-4">
            CS — Ticket System
          </h1>
          <p className="text-sm opacity-80 leading-relaxed">
            A task and ticket management platform where users can track customer
            tickets, move tasks into progress, and resolve issues efficiently
            with real-time updates and a clean interface.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white ">Products & Services</li>
            <li className="hover:text-white ">Customer Stories</li>
            <li className="hover:text-white ">Download Apps</li>
          </ul>
        </div>

        {/* Information + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="hover:text-white ">Privacy Policy</li>
            <li className="hover:text-white ">Terms & Conditions</li>
            <li className="hover:text-white ">Join Us</li>
          </ul>

          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex gap-4">
            <Twitter className="hover:text-white " size={18} />
            <Linkedin className="hover:text-white " size={18} />
            <Facebook className="hover:text-white " size={18} />
            <Mail className="hover:text-white " size={18} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm opacity-70">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
