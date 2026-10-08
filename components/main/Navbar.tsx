import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const navigationLinks = [
  { label: "About", href: "#about-me" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-500/20 bg-[#030014]/80 shadow-lg shadow-[#2A0E61]/30 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8"
      >
        <a
          href="mailto:omurambi@gsumail.gram.edu"
          className="rounded text-sm font-semibold text-gray-300 transition-colors hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          omurambi@gsumail.gram.edu
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/OratorMurambiwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="rounded text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <RxGithubLogo aria-hidden="true" className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/oratormurambiwa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="rounded text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <RxLinkedinLogo aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>

        <ul className="order-last flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-[#7042f861] bg-[#030014]/60 px-4 py-2 text-sm text-gray-200 md:order-none md:w-auto">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded transition-colors hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;