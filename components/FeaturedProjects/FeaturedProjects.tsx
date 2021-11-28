import Link from 'next/link';
import Image from 'next/image';
import External from '../svg/External';
import Code from '../svg/Code';
import featuredProjects from '../../data/featured-projects';

const FeaturedProjects = () => {
  const evenDesc = 'col-start-1 col-span-full md:col-start-5 lg:col-start-6';
  const evenImg = 'col-start-1 col-span-full md:col-end-8';
  const oddDesc = 'col-start-1 col-span-full md:col-end-8 text-left';
  const oddImg = 'col-start-1 col-span-full md:col-start-5 lg:col-start-6';
  return (
    <ul className="space-y-20 md:space-y-10 lg:space-y-20">
      {featuredProjects.map((project, i) => {
        return (
          <li
            className="grid grid-cols-12 grid-rows-1 mb-12 shadow-lg rounded-lg overflow-hidden md:text-right md:shadow-none"
            key={project.name}
          >
            <div
              className={`z-20 relative row-start-1 row-span-full p-6 pt-8 pb-8 sm:pt-20 sm:pb-20  md:p-10 md:pr-0 ${
                i % 2 == 0 ? evenDesc : oddDesc
              }`}
            >
              <p className="text-main text-sm md:text-lg mb-2">
                Featured Project
              </p>
              <h2 className="text-white text-2xl font-bold mb-6 hover:text-main w-full md:text-black md:text-3xl">
                <Link href="/" passHref>
                  <a className="w-full block">{project.name}</a>
                </Link>
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed md:bg-main md:p-4 md:rounded-md text-left">
                {project.desc}
              </p>
              <ul
                className={`flex flex-wrap space-x-6 mb-6 text-gray-100 md:text-black ${
                  i % 2 == 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                {project.tools.map((x, i) => (
                  <i key={x + i}>{x}</i>
                ))}
              </ul>
              <div
                className={`space-x-8 text-gray-100 md:text-black flex ${
                  i % 2 == 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                <a
                  href={project.githubLink}
                  className="hover:text-main focus:text-main"
                  aria-label="Project github page"
                >
                  <Code />
                </a>
                <a
                  href={project.liveLink}
                  className="hover:text-main focus:text-main"
                  aria-label="Project live page"
                >
                  <External />
                </a>
              </div>
            </div>
            <div
              className={`overflow-hidden relative row-start-1 row-span-full md:h-4/6 md:self-center md:rounded-md md:shadow-lg lg:h-5/6 2xl:h-full ${
                i % 2 == 0 ? evenImg : oddImg
              }`}
            >
              <Link href={project.liveLink}>
                <a>
                  <Image
                    src={project.image}
                    alt=""
                    layout="fill"
                    className="opacity-50 md:opacity-100"
                  />
                  <div className="absolute bg-gray-900/80 md:bg-gray-900/30 w-full h-full z-10 hover:bg-transparent transition-all duration-300"></div>
                </a>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturedProjects;