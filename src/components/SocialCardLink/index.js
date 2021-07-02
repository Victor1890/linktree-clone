import LinkIcon from "assets/icons/linkIcon";

const SocialCardLink = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg my-6 sm:my-8 md:my-12 transition-shadow hover:shadow-md removeBlueHighlight hoverBaseCard portfolioCard bg-gradient-to-l from-green-400 to-green-500 dark:to-indigo-500 dark:from-indigo-400 w-64 mb:w-10/12 sm:w-full mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group">
      <a className="no-underline">
        <div className="flex gap-x-4">
          <div className="text-4xl md:text-5xl h-full my-auto mx-0 transform hover:scale-110 text-white">
            {/* Icono */}
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-lg text-black dark:text-white  group-hover:underline">
                My Portfolio
              </h1>
              <LinkIcon />
            </div>
            <p className="text-sm">
              Frontend Developer, specialized in Javascript & React for UI
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialCardLink;
