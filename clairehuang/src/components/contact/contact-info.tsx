import { FaLinkedin, FaGithubSquare, FaYoutube } from "react-icons/fa";
import { CONTACT_LIST } from "../../config/contact-info";

export const ContactInfo = () => {
  const getIcon = (social_media: string) => {
    switch (social_media) {
      case "linkedin":
        return <FaLinkedin />;
      case "github":
        return <FaGithubSquare />;
      case "youtube":
        return <FaYoutube />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="bg-light-brown rounded-m p-m text-dark-navy gap-space-3 drop-shadow-lg">
      <p className="text-xxxl pb-s text-nowrap ">Ready, Set, Connect !</p>
      <div className="flex flex-row l:flex-col h-full items-center justify-center gap-space-4 text-dark-brown text-[60px] pb-s l:pb-l">
        {CONTACT_LIST.map((contact, index) => (
          <a
            href={contact.url}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer drop-shadow-md hover:scale-105 active:scale-95">
            {getIcon(contact.name)}
          </a>
        ))}
      </div>
    </div>
  );
};
