import { IoClose } from "react-icons/io5";
import ReactDOM from "react-dom";

interface IModal {
  content: string;
  type?: string;
  handleModal: (openModal: boolean) => void;
}

export const Modal = (props: IModal) => {
  const { content, type, handleModal } = props;
  const modalContent = (
    <div
      className="fixed inset-0 items-center justify-center flex"
      onClick={() => handleModal(false)}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleModal(false)}>
          <IoClose className="absolute top-10 right-4 cursor-pointer text-xxxxl text-dark-brown border border-dark-brown bg-base-white rounded-full hover:bg-dark-brown hover:text-base-white hover:border-base-white active:scale-95 shadow-lg z-[100]" />
        </button>
        {type !== "video" && (
          <p className="text-dark-navy text-[16px] font-normal playpen-san-content">
            {" "}
            {content}{" "}
          </p>
        )}
        {type === "video" && (
          <div className="w-[80vw] md:w-[60vw] relative aspect-[5/2.72] rounded-m overflow-hidden bg-base-white">
            <video
              className="absolute inset-0 w-full h-full"
              src={content}
              title="demo video"
              autoPlay
              controls
              // playsInline
              // webkit-playsinline="true"
              // preload="metadata"
            />
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};
