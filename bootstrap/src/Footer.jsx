import React from "react";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] ">
      <div className="container mx-auto">
        <div className=" gap-10 justify-between">
          {/* First Column */}
          <div className="w-full sm:w-2/3 lg:w-3/12 mb-10">
            <a href="/#" className="mb-6 inline-block max-w-[160px]">
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo.svg"
                alt="logo"
                className="max-w-full dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                alt="logo"
                className="max-w-full hidden dark:block"
              />
            </a>
            <p className="mb-7 text-base text-body-color dark:text-dark-6">
              Sed ut perspiciatis undmnis is iste natus error sit amet
              voluptatem totam rem aperiam.
            </p>
            <p className=" items-center text-sm font-medium text-dark dark:text-white">
              <span className="mr-3 text-primary">
                {/* SVG Icon */}
              </span>
              <span>+012 (345) 678 99</span>
            </p>
          </div>

          {/* Resources Section */}
          <div className="d-flex" style={{justifyContent:"space-between"}}>

          <div className="w-full sm:w-1/2 lg:w-2/12 mb-10">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-1/2 lg:w-2/12 mb-10">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              Company
            </h4>
            <ul className="space-y-3">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-2/12 mb-10">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </ul>
          </div>

          {/* Social and Copyright Section */}
          <div className="w-full sm:w-1/2 lg:w-3/12 mb-10">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              Follow Us On
            </h4>
            <div className="mb-6 flex gap-3">
              <SocialLink platform="facebook" />
              <SocialLink platform="twitter" />
              <SocialLink platform="linkedin" />
              <SocialLink platform="instagram" />
            </div>
            <p className="text-base text-body-color dark:text-dark-6">
              &copy; 2025 TailGrids
            </p>
          </div>
          </div>

        </div>
      </div>

      {/* Decorative SVGs */}
      <DecorativeSVGs />
    </footer>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

const SocialLink = ({ platform }) => {
  const icons = {
    facebook: (
      <svg width="8" height="16" viewBox="0 0 8 16" className="fill-current">
        {/* Facebook SVG Path */}
      </svg>
    ),
    twitter: (
      <svg width="16" height="12" viewBox="0 0 16 12" className="fill-current">
        {/* Twitter SVG Path */}
      </svg>
    ),
    linkedin: (
      <svg width="16" height="12" viewBox="0 0 16 12" className="fill-current">
        {/* LinkedIn SVG Path */}
      </svg>
    ),
    instagram: (
      <svg width="14" height="14" viewBox="0 0 14 14" className="fill-current">
        {/* Instagram SVG Path */}
      </svg>
    ),
  };

  return (
    <a
      href="javascript:void(0)"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
    >
      {icons[platform]}
    </a>
  );
};

const DecorativeSVGs = () => {
  return (
    <>
      <span className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width={217}
          height={229}
          viewBox="0 0 217 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
            fill="url(#paint0_linear_1179_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_5"
              x1="76.5"
              y1={281}
              x2="76.5"
              y2="1.22829e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.08" />
              <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute right-10 top-10 z-[-1]">
        <svg
          width={75}
          height={75}
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
            fill="url(#paint0_linear_1179_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_4"
              x1="-1.63917e-06"
              y1="37.5"
              x2={75}
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#13C296" stopOpacity="0.31" />
              <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </>
  );
};

export default Footer;
