import "./App.css";
import { Analytics } from "@vercel/analytics/react";

const links = [
  {
    name: "Site Web",
    url: "https://www.forumehtp-entreprises.com/",
    img: "/website.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/forum-ehtp-entreprises-ma/posts/",
    img: "/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/forumehtpentreprises/?hl=en",
    img: "/instagram.svg",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/forum.ehtpentreprises/",
    img: "/facebook.svg",
  },
];

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center bg-[#1A1A1A] py-12 px-4">
        <div className="mb-4 text-center">
          <img
            src="/logo_30_red_nobg.svg"
            alt="Logo Forum EHTP"
            className="w-32 h-auto mx-auto mb-4"
          />
          <h1 className="text-white font-bold tracking-widest"> 30e ÉDITION</h1>
          <p className="text-gray-400 mt-1 text-sm">Forum EHTP-Entreprises</p>
          <p className="text-white mt-4 text-sm text-italic">
            Retrouvez nous sur notre{" "}
          </p>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full flex justify-center items-center bg-[#C41230] hover:bg-red-700 text-white font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors duration-200"
            >
              <img
                src={link.img}
                alt={`${link.name} icon`}
                className="absolute left-6 w-6 h-6"
              />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <Analytics />
      </div>
    </>
  );
}

export default App;
