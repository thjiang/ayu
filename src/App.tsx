import ImageCard from "./components/imageCard";
import "./App.css";

interface ImageData {
  url: string;
  exifInfo: string[];
  title: string;
  camera: string;
  film: string;
  time: string;
}

const App = () => {
  const images: ImageData[] = [
    {
      url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
      exifInfo: ['ƒ/5', '1/850s', 'ISO 125', '+1/3ev'],
      title: "title",
      camera: "SONY ICLE-7R V",
      film: "PROVIA/Std",
      time: "26 NOV 2023 3:58PM",
    },
    {
      url: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80",
      exifInfo: ['ƒ/5', '1/850s', 'ISO 125', '+1/3ev'],
      title: "title",
      camera: "SONY ICLE-7R V",
      film: "PROVIA/Std",
      time: "26 NOV 2023 3:58PM",
    },
    {
      url: "https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80",
      exifInfo: ['ƒ/5', '1/850s', 'ISO 125', '+1/3ev'],
      title: "title",
      camera: "SONY ICLE-7R V",
      film: "PROVIA/Std",
      time: "26 NOV 2023 3:58PM",
    },
  ];

  return (
    <main className="md:container md:mx-auto px-4 pb-3 lg:px-6 lg:pb-6">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
        <div className="col-span-1 md:col-span-9">
          <div>
            <div
              style={{
                opacity: 1,
                transform: "translateX(0px) translateY(0px) scale(1)",
              }}
            >
              <div className="flex items-center w-full min-h-[4rem] leading-none">
                <div className="flex flex-grow items-center gap-4">
                  <div className="flex divide-x divide-gray-300 dark:divide-gray-800 border rounded-[0.25rem] border-gray-300 dark:border-gray-800 overflow-hidden shadow-sm">
                    <a
                      className="py-0.5 px-1.5 cursor-pointer hover:bg-gray-50 active:bg-gray-100 active:text-gray-400 dark:hover:bg-gray-950 dark:active:bg-gray-900/75 dark:active:text-gray-600 text-black dark:text-white"
                      href="/"
                    >
                      <svg
                        width="28"
                        height="24"
                        viewBox="0 0 28 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Full Frame</title>
                        <rect
                          x="5.625"
                          y="6.625"
                          width="16.75"
                          height="10.75"
                          rx="1"
                          strokeWidth="1.25"
                        ></rect>
                        <line
                          x1="5"
                          y1="3.875"
                          x2="23"
                          y2="3.875"
                          strokeWidth="1.25"
                        ></line>
                        <line
                          x1="23"
                          y1="20.125"
                          x2="5"
                          y2="20.125"
                          strokeWidth="1.25"
                        ></line>
                      </svg>
                    </a>
                    <a
                      className="py-0.5 px-1.5 cursor-pointer hover:bg-gray-50 active:bg-gray-100 active:text-gray-400 dark:hover:bg-gray-950 dark:active:bg-gray-900/75 dark:active:text-gray-600 text-gray-300 dark:text-gray-700"
                      href="/grid"
                    >
                      <svg
                        width="28"
                        height="24"
                        viewBox="0 0 28 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Grid</title>
                        <rect
                          x="5.625"
                          y="6.625"
                          width="16.75"
                          height="10.75"
                          rx="1"
                          strokeWidth="1.25"
                        ></rect>
                        <line
                          x1="11.375"
                          y1="7"
                          x2="11.375"
                          y2="18"
                          strokeWidth="1.25"
                        ></line>
                        <line
                          x1="16.875"
                          y1="7"
                          x2="16.875"
                          y2="18"
                          strokeWidth="1.25"
                        ></line>
                        <line
                          x1="5"
                          y1="12.0417"
                          x2="22.3333"
                          y2="12.0417"
                          strokeWidth="1.25"
                        ></line>
                      </svg>
                    </a>
                    <a
                      className="md:hidden py-0.5 px-1.5 cursor-pointer hover:bg-gray-50 active:bg-gray-100 active:text-gray-400 dark:hover:bg-gray-950 dark:active:bg-gray-900/75 dark:active:text-gray-600 text-gray-300 dark:text-gray-700"
                      href="/sets"
                    >
                      <svg
                        width="28"
                        height="24"
                        viewBox="0 0 28 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Photo Sets</title>
                        <path
                          d="M18.5 16.375L9.75 16.375"
                          strokeWidth="1.25"
                        ></path>
                        <path
                          d="M22.25 12.125L9.75 12.125"
                          strokeWidth="1.25"
                        ></path>
                        <path
                          d="M20.5 7.875L9.75 7.875"
                          strokeWidth="1.25"
                        ></path>
                        <path
                          d="M7.25 16.375L6.25 16.375"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M7.25 12.125L6.25 12.125"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M7.25 7.875L6.25 7.875"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="hidden xs:block">
                  <a href="/">photos.sambecker.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="columns-3xs gap-8 space-y-8">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            imageUrl={image.url}
            exifInfo={image.exifInfo}
            title={image.title}
            camera={image.camera}
            film={image.film}
            time={image.time}
          />
        ))}
      </div>
      {/* <div className="columns-3xs gap-8 space-y-8">
        <img
          className="w-full aspect-video object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
        />
        <img
          className="w-full aspect-square object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
        />
        <img
          className="w-full aspect-square object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80"
        />
        <img
          className="w-full aspect-video object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
        />
        <img
          className="w-full aspect-square object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
        />
        <img
          className="w-full aspect-video object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
        />
      </div> */}
    </main>
  );
};

export default App;
