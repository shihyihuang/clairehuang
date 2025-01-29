interface IChip {
  content: string;
}

export const Chip = (props: IChip) => {
  const { content } = props;
  return (
    <div className="playpen-san-content w-auto py-space-1 px-[7px] md:py-space-1 md:px-space-3 rounded-full bg-dark-brown mr-space-1 md:mr-xs text-base-white text-m md:text-l l:text-xl">
      {content}
    </div>
  );
};
