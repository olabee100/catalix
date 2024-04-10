const { cn } = require("../lib/utils");
const { LogoIcon } = require("./Icon");

const LogoLink = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center space-x-2", className)}>
      <LogoIcon className=" ml-5 size-9 font-bold" />
      <span className="text-3xl font-bold tracking-wider">Catalix</span>
    </div>
  );
};

export {LogoLink};
