import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, TwitterIcon, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Services",
    href: "#Services",
  },
  {
    title: "Pricing",
    href: "#PricingPlans",
  },
  // {
  //   title: "Careers",
  //   href: "#",
  // },
  {
    title: "Help",
    href: "/contact",
  },
];

const Footer05Page = () => {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      <footer className="bg-[#0a0a0a] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <Image
              src="/Astrix_logo.png"
              alt="Astrix Digital Media Logo"
              width={124}
              height={32}
              className="h-6 sm:h-8 w-auto"
            />

            <ul className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <br />
             <span className="flex items-center gap-4 sm:gap-5 text-gray-400">
              <Link
                href="https://www.instagram.com/astrix_digital_media/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/astrix-digital-media"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/AstrixDigitalMedia/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </span>
          </div>
          <div className="py-6 sm:py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-4 sm:gap-y-5">
            {/* Copyright */}
            <span className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Copyright © 2025
              astrixdigitalmedia.com | Powered by astrixdigitalmedia.com
            </span>
            
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
