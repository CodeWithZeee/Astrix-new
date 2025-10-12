import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
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
    <div className=" flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
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
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-6 sm:py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-4 sm:gap-y-5">
            {/* Copyright */}
            <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} Copyright © 2025
              astrixdigitalmedia.com | Powered by astrixdigitalmedia.com
            </span>

            <div className="flex items-center gap-4 sm:gap-5 text-muted-foreground">
              <Link
                href="#"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                <DribbbleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                <TwitchIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
