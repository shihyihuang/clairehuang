import { useState } from "react";
import { IEmail } from "../../types/email";
import { EMAIL_VALIDATION } from "../../config/email-validation";
import { Spinner } from "../spinner";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const inputValidation = (
    sender: string,
    email: string,
    content: string
  ): boolean => {
    const emailPattern = EMAIL_VALIDATION.emailPattern;
    const namePattern = EMAIL_VALIDATION.namePattern;
    const contentPattern = EMAIL_VALIDATION.contentPattern;
    const dangerousPattern = EMAIL_VALIDATION.dangerousPattern;
    let isValid = true;
    if (!namePattern.test(sender) || dangerousPattern.test(sender)) {
      toast.error("Please enter a valid name (letters, hyphens)");
      isValid = false;
    }
    if (!emailPattern.test(email) || dangerousPattern.test(email)) {
      toast.error("Please enter a valid email address");
      isValid = false;
    }
    if (!contentPattern.test(content) || dangerousPattern.test(content)) {
      toast.error(
        "Please include alphanumeric characters and punctuation only"
      );
      isValid = false;
    }
    return isValid;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const emailInfo: IEmail = {
      sender: formData.get("sender") as string,
      email: formData.get("email") as string,
      content: formData.get("content") as string,
    };

    try {
      if (
        !inputValidation(emailInfo.sender, emailInfo.email, emailInfo.content)
      )
        return setIsLoading(false);

      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const responseData = await res.json();

      if (res.ok) {
        toast.success("Message sent!");
        form.reset();
        // if (form) {
        //   form.reset();
        // }
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Message failed to send.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={sendEmail} className="drop-shadow-lg">
      <div className="flex flex-col items-start justify-center px-s py-m md:px-m h-[60vh] bg-light-brown rounded-m ">
        {/* Name */}
        <div className="flex flex-col w-full pb-m">
          <div className="flex flex-row text-xxl">
            <label className="text-dark-brown pr-s">NAME</label>
            <input
              required
              type="text"
              name="sender"
              placeholder="How to address you"
              className="rounded-s w-full px-s text-xl font-light playpen-san-content text-dark-navy"
            />
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col w-full pb-m">
          <div className="flex flex-row text-xxl">
            <label className="text-dark-brown pr-s">EMAIL</label>
            <input
              required
              type="text"
              name="email"
              placeholder="Your contact email"
              className="rounded-s w-full px-s text-xl font-light playpen-san-content text-dark-navy"
            />
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col items-center w-full text-xxl pb-m">
          <textarea
            required
            name="content"
            placeholder="Message"
            className="rounded-s w-full px-s min-h-[20vh] leading-tight text-xl font-light playpen-san-content text-dark-navy"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center text-xxl bg-dark-brown rounded-m w-full py-space-2 text-base-white shadow-md hover:-translate-y-1 active:scale-90 hover:bg-base-white hover:text-dark-brown hover:border-2 hover:border-dark-brown">
          {isLoading ? <Spinner /> : "SEND"}
        </button>
      </div>
    </form>
  );
};
