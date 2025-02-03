import { useState } from "react";
import { IEmail } from "../../types/email";
import { EMAIL_VALIDATION } from "../../config/email-validation";

interface IContactForm {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactForm = (props: IContactForm) => {
  const { status, setStatus, setOpenDialog } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [contentErrorMessage, setContentErrorMessage] = useState("");

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
      setNameErrorMessage(`${EMAIL_VALIDATION.nameErrorMessage}`);
      isValid = false;
    } else {
      setNameErrorMessage("");
    }

    if (!emailPattern.test(email) || dangerousPattern.test(email)) {
      setEmailErrorMessage(`${EMAIL_VALIDATION.emailErrorMessage}`);
      isValid = false;
    } else {
      setEmailErrorMessage("");
    }

    if (!contentPattern.test(content) || dangerousPattern.test(content)) {
      setContentErrorMessage(`${EMAIL_VALIDATION.contentErrorMessage}`);
      isValid = false;
    } else {
      setContentErrorMessage("");
    }

    return isValid;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const emailInfo: IEmail = {
      sender: formData.get("sender") as string,
      email: formData.get("email") as string,
      content: formData.get("content") as string,
    };
    console.log("contact-form:", emailInfo);
    try {
      if (
        !inputValidation(emailInfo.sender, emailInfo.email, emailInfo.content)
      ) {
        setIsLoading(false);
        setStatus("error");
        return;
      }
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();
      console.log("Server response:", responseData);

      if (res.ok) {
        setStatus("success");
        if (form) {
          form.reset();
          setNameErrorMessage("");
          setEmailErrorMessage("");
          setContentErrorMessage("");
        } else {
          console.warn("Form reference is null, unable to reset");
        }
      } else {
        console.error("Server error:", responseData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
      updateDialog();
    }
  };

  const updateDialog = () => {
    if (status !== "idle") {
      setOpenDialog(true);
    }
  };

  return (
    <form onSubmit={sendEmail} className="drop-shadow-lg">
      <div className="flex flex-col items-start justify-center p-s md:p-m h-[50vh] bg-light-brown rounded-m ">
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
          <p className="text-right text-m playpen-san-content text-error-red leading-none pt-space-2">
            {nameErrorMessage}
          </p>
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
          <p className="text-right text-m playpen-san-content text-error-red leading-none pt-space-2">
            {emailErrorMessage}
          </p>
        </div>
        {/* Message */}
        <div className="flex flex-col items-center w-full text-xxl pb-m">
          <textarea
            required
            name="content"
            placeholder="Message"
            className="rounded-s w-full px-s min-h-[20vh] leading-tight text-xl font-light playpen-san-content text-dark-navy"
          />
          <p className="text-right flex w-full justify-end text-m playpen-san-content text-error-red leading-none pt-space-2">
            {contentErrorMessage}
          </p>
        </div>
        <button
          type="submit"
          className="text-xxl bg-dark-brown rounded-m w-full py-space-1 text-base-white shadow-md hover:-translate-y-1 active:scale-90 hover:bg-base-white hover:text-dark-brown hover:border-2 hover:border-dark-brown">
          {isLoading ? (
            <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
              {" "}
            </svg>
          ) : (
            "SEND"
          )}
        </button>
      </div>
    </form>
  );
};
