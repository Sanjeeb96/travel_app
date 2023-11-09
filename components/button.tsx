import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  icon?: string;
  full?: boolean;
};

const Button = ({ title, type, variant, icon, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full 
                  border ${variant} ${full && "w-full"}`}
    >
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
      <label className="text-[16px] font-[700] whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
