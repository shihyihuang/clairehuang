import { useState } from "react";
// const sgMail = require("@sendgrid/mail");

interface IContact {
  sender: string;
  email: string;
  content: string;
}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [contentErrorMessage, setContentErrorMessage] = useState("");

  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "hclaire1007@gmail.com",
    from: "you@example.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  const inputValidation = (
    sender: string,
    email: string,
    content: string
  ): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // only letters, spaces, and hyphens, prevent < or >
    const namePattern = /^[a-zA-Z\s-]+$/;
    // only alphanumeric, some punctuation, prevent < or >
    const contentPattern = /^[a-zA-Z0-9\s.,!?()'";\-:]+$/;
    // Pattern to check for potentially dangerous strings
    const dangerousPattern =
      /<|>|javascript:|data:|file:|vbscript:|onload=|onerror=|eval\(|expression\(|url\(|alert\(|document\.cookie|document\.write|window\.location/i;

    let isValid = true;

    if (!namePattern.test(sender) || dangerousPattern.test(sender)) {
      setNameErrorMessage(
        "Please enter a valid name (letters, spaces, and hyphens only)"
      );
      // console.log("Name validation failed");
      isValid = false;
    } else {
      setNameErrorMessage("");
    }

    if (!emailPattern.test(email) || dangerousPattern.test(email)) {
      setEmailErrorMessage("Please enter a valid email address");
      // console.log("Email validation failed");
      isValid = false;
    } else {
      setEmailErrorMessage("");
    }

    if (!contentPattern.test(content) || dangerousPattern.test(content)) {
      setContentErrorMessage(
        "Please include alphanumeric characters and basic punctuation only"
      );
      // console.log("Content validation failed");
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

    const emailInfo: IContact = {
      sender: formData.get("sender") as string,
      email: formData.get("email") as string,
      content: formData.get("content") as string,
    };

    //   try {
    //     if (
    //       !inputValidation(emailInfo.sender, emailInfo.email, emailInfo.content)
    //     ) {
    //       setIsLoading(false);
    //       setStatus("error");
    //       return;
    //     }
    //     (async () => {
    //       try {
    //         await sgMail.send(msg);
    //       } catch (error: any) {
    //         console.error(error);

    //         if (error.response) {
    //           console.error(error.response.body);
    //         }
    //       }
    //     })();
    //   } finally {
    //     setIsLoading(false);
    //   }
  };

  return (
    <div className="max-w-screen w-full ">
      <form onSubmit={sendEmail}>
        <div className="bg-light-brown rounded-m h-auto p-s flex flex-col items-start">
          {/* Name */}
          <div className="flex flex-row w-full text-xxxl">
            <label className="text-dark-brown pr-s">NAME</label>
            <input
              required
              type="text"
              name="sender"
              placeholder="How to address you"
              className="rounded-s w-full px-s "
            />
            <p>{nameErrorMessage}</p>
          </div>
          {/* Email */}
          <div className="flex flex-row w-full text-xxxl py-m">
            <label className="text-dark-brown pr-s">EMAIL</label>
            <input
              required
              type="text"
              name="email"
              placeholder="Your contact email"
              className="rounded-s w-full px-s "
            />
            <p>{emailErrorMessage}</p>
          </div>
          {/* Message */}
          <div className="flex items-center w-full text-xxxl pb-m">
            {/* <label className="text-dark-brown pr-s">MESSAGE</label> */}
            <textarea
              required
              name="content"
              placeholder="Message"
              className="rounded-s w-full px-s"
            />
            <p>{contentErrorMessage}</p>
          </div>
          <button
            type="submit"
            className="text-xxxl bg-dark-brown rounded-m w-full py-space-1 text-base-white shadow-md hover:-translate-y-1 active:scale-90">
            SEND
          </button>

          {/* {isLoading ? (
            <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
              {" "}
            </svg>
          ) : (
            "Send"
          )} */}
        </div>
      </form>
    </div>
  );
};

{
  /* <div className="w-[80vh] shadow-m bg-dark-brown rounded-m">
  <div className="flex flex-col ">
    <label className="input flex items-center gap-2 mt-2 bg-primary border-primary !text-info">
      Name
      <input
        required
        type="text"
        name="sender"
        className="grow"
        placeholder="How to address you"
      />
    </label>
    <p className="!text-base-100">{nameErrorMessage}</p>
    <label className="input flex items-center gap-2 mt-4 bg-primary border-primary !text-info">
      Email
      <input
        required
        type="email"
        name="email"
        className="grow"
        placeholder="Your contact email"
      />
    </label>
    <p className="!text-base-100">{emailErrorMessage}</p>
    <textarea
      required
      name="content"
      className="textarea textarea-bordered mt-4 bg-primary border-primary flex-grow h-48 !text-info"
      placeholder="Message"></textarea>
    <p className="!text-base-100">{contentErrorMessage}</p>
    <button
      type="submit"
      className="btn bg-secondary border-none hover:bg-warning hover:text-info text-primary shadow-md shadow-gray-400 mt-4 text-base">
      {isLoading ? (
        <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
          {" "}
        </svg>
      ) : (
        "Send"
      )}
    </button>
    {status === 'success' && <SnackBar content="Message sent successfully!" status={status}/>}
                  {status === 'error' && <SnackBar content="Failed to send message. Please try again!" status={status}/>}
  </div>
</div>; */
}
