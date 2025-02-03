import { ContactForm } from "../components/contact/contact-form";
import { ContactInfo } from "../components/contact/contact-info";
import { useState } from "react";
import { Dialog } from "../components/dialog";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Claire";
  }, []);

  const [status, setStatus] = useState<string>("idle");
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const getDialogContent = (status: string) => {
    if (status === "success") {
      return "Message sent!";
    } else {
      return "Message failed to send.";
    }
  };

  return (
    <div className="flex flex-col px-m md:px-l py-s l:py-l">
      <p className="text-[40px] md:text-[60px] l:text-[80px] py-m l:py-l text-dark-navy">
        Contact Me
      </p>
      <div className="flex flex-col l:flex-row gap-m justify-center">
        <div className="max-w-screen w-full l:w-[70%] ">
          <ContactForm
            status={status}
            setStatus={setStatus}
            setOpenDialog={setOpenDialog}
          />
        </div>
        <ContactInfo />
      </div>
      {status !== "idle" && openDialog && (
        <Dialog
          content={getDialogContent(status)}
          setOpenDialog={setOpenDialog}
        />
      )}
    </div>
  );
};

// h-[20vh] l:h-[50vh] w-full l:w-[30%] xl:w-[20%]
