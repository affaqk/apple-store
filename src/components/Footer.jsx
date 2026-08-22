import React from "react";
import { motion } from "framer-motion";

const footerLinks = {
  "Shop and Learn": ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision Pro", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  "Apple Wallet": ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  "Account": ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  "Entertainment": ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
  "Apple Store": ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"],
  "For Business": ["Apple and Business", "Shop for Business"],
  "For Education": ["Apple and Education", "Shop for K-12", "Shop for College"],
  "For Healthcare": ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone", "Ovulation Estimates in Cycle Tracking"],
  "For Government": ["Shop for Government", "Shop for Veterans and Military"],
  "Apple Values": ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain"],
  "About Apple": ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
};

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] mt-1">
      {/* Buy section */}
      <div className="border-b border-[#d2d2d7] py-5 px-6">
        <p className="text-xs text-[#6e6e73] text-center max-w-[980px] mx-auto">
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
          Additional terms from Apple or Apple's trade-in partners may apply. Not all devices are eligible for credit.
          See{" "}
          <a href="#" className="text-[#0071e3] hover:underline">apple.com/shop/trade-in</a>{" "}
          for more information.
        </p>
      </div>

      {/* Links grid */}
      <div className="max-w-[980px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.entries(footerLinks).slice(0, 5).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#1d1d1f] mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.slice(0, 6).map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d2d2d7] px-6 py-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-xs text-[#6e6e73] mb-4">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item) => (
              <a key={item} href="#" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                {item}
              </a>
            ))}
            <span className="text-xs text-[#6e6e73] ml-auto">United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
