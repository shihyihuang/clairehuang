import { ContactForm } from "../components/contact/contact-form";
import { ContactInfo } from "../components/contact/contact-info";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Claire";
  }, []);

  return (
    <div className="flex flex-col px-m md:px-l py-s l:py-l">
      <p className="text-[40px] md:text-[60px] l:text-[80px] py-m l:py-l text-dark-navy">
        Contact Me
      </p>
      <div className="flex flex-col l:flex-row gap-m justify-center">
        <div className="max-w-screen w-full l:w-[70%] ">
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};
