import clsx from "clsx";

interface PryButtonProps {
  classNames?: string;
  text: string;
  onClick?: () => void;
}

const PryButton = ({
  classNames,
  onClick,
  text,
}: PryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-bright-green rounded-md font-medium text-base text-white py-3 px-4 cursor-pointer",
        classNames
      )}
    >
      {text}
    </button>
  );
};

export default PryButton;