import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative z-10 mt-10 border-t border-purple-500/20 bg-[#030014]/60 px-6 py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-lg font-semibold text-white">
            Let&apos;s Connect
          </p>

          <a
            href="mailto:omurambi@gsumail.gram.edu"
            className="mt-2 inline-block rounded text-sm text-gray-300 transition-colors hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            omurambi@gsumail.gram.edu
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/OratorMurambiwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="rounded text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <RxGithubLogo aria-hidden="true" className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/oratormurambiwa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="rounded text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <RxLinkedinLogo aria-hidden="true" className="h-6 w-6" />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Orator Murambiwa
        </p>
      </div>
    </footer>
  );
};

export default Footer;