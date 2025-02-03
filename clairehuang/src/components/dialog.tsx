import { IoClose } from "react-icons/io5";

interface IDialog {
  content: string;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dialog = (props: IDialog) => {
  const { content, setOpenDialog } = props;
  return (
    <div className="fixed right-4 bottom-4 p-m min-w-[30vh] bg-base-white rounded-s drop-shadow-lg border border-dark-navy">
      <button onClick={() => setOpenDialog(false)}>
        <IoClose className="absolute right-2 top-2 cursor-pointer text-xxl text-dark-navy border border-dark-navy bg-base-white rounded-full hover:bg-dark-navy hover:text-base-white shadow-lg" />
      </button>
      <p className="text-dark-navy text-[16px] font-normal playpen-san-content">
        {content}
      </p>
    </div>
  );
};
