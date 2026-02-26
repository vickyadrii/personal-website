import Image from "next/image";

type Props = {
  children: string;
  icon?: string;
  enableSweepHover?: boolean;
};

const ButtonIcon = ({
  children,
  icon,
  enableSweepHover = false,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`md:px-4 px-3 md:py-2 py-1.5 border border-primary-dark-600 rounded-md transition-all duration-200 ease-out w-fit disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden ${
        enableSweepHover
          ? "resume-sweep-hover bg-primary-dark-700 active:bg-primary-dark-700"
          : "bg-primary-dark-700 hover:bg-black active:bg-primary-dark-700"
      }`}
      {...props}
    >
      {enableSweepHover && <span aria-hidden className="resume-sweep-overlay" />}
      <span className="relative z-10 flex items-center md:gap-2 gap-1">
        <p className="md:text-base text-xs">{children}</p>
        {icon && <Image src={icon ?? ""} alt={children} width={24} height={24} className="md:w-6 w-5 md:h-6 h-5" />}
      </span>
    </button>
  );
};

export default ButtonIcon;
