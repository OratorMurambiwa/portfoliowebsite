import Image from "next/image";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl?: string;
  technologies?: string[];
  status?: "Complete" | "In progress";
}

const ProjectCard = ({
  src,
  title,
  description,
  githubUrl,
  technologies = [],
  status,
}: Props) => {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#030014]/70 shadow-lg transition-colors hover:border-purple-500/60">
      <div className="relative aspect-video w-full overflow-hidden bg-black/30">
        <Image
          src={src}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          {status && (
            <span
              className={`rounded-full border px-2.5 py-1 text-xs ${
                status === "In progress"
                  ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
                  : "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
              }`}
            >
              {status}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-gray-300">
          {description}
        </p>

        {technologies.length > 0 && (
          <ul
            aria-label={`${title} technologies`}
            className="flex flex-wrap gap-2"
          >
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-200"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        {githubUrl && (
          <div className="mt-auto pt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-lg border border-purple-500/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              <RxGithubLogo aria-hidden="true" className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;