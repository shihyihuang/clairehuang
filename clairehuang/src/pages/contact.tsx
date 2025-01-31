import { ContactForm } from "../components/content/contact-form";

export const Contact = () => {
  return (
    <div className="flex flex-col px-s">
      <p className="text-[30px] md:text-[60px] l:text-[80px] py-m text-dark-navy">
        Contact Me
      </p>
      <div className="flex flex-row justify-center items-center ">
        <ContactForm />
      </div>
    </div>
  );
};
