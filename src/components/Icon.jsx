import React from "react";
import { cn } from "../lib/utils";

const LogoIcon = ({
  className,
}) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M3.88885 11.4074V30.963C3.88885 31.6807 4.32039 32.328 4.98287 32.604L21.6666 39.5556M3.88885 11.4074L20.2991 4.5698C21.1743 4.20513 22.1589 4.20513 23.0342 4.5698L30.5555 7.7037M3.88885 11.4074L12.7777 15.1111M21.6666 18.8148V39.5556M21.6666 18.8148L39.4444 11.4074M21.6666 18.8148L12.7777 15.1111M21.6666 39.5556L38.3504 32.604C39.0129 32.328 39.4444 31.6807 39.4444 30.963V11.4074M39.4444 11.4074L30.5555 7.7037M12.7777 15.1111L30.5555 7.7037"
        stroke="#ffffff"
        strokeWidth="2.66667"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { LogoIcon };
