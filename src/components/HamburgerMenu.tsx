"use client";

import { Menu } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const onMenuClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Element)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 right-0 w-40 bg-white shadow-md rounded-md"
        >
          <div className="flex flex-col w-full">
            <div
              className="py-2 border-b px-2 cursor-pointer hover:bg-gray-100"
              onClick={onMenuClick}
            >
              Home
            </div>
            <div
              className="py-2 px-2 border-b cursor-pointer hover:bg-gray-100"
              onClick={onMenuClick}
            >
              About
            </div>
            <div className="pt-1 px-2 border-b border-dotted">Services</div>
            <div
              className="py-2 px-2 border-b border-dashed text-center cursor-pointer hover:bg-gray-100 text-sm"
              onClick={onMenuClick}
            >
              Service 1
            </div>
            <div
              className="py-2 px-2 border-b text-center cursor-pointer hover:bg-gray-100 text-sm"
              onClick={onMenuClick}
            >
              Service 2
            </div>
          </div>
          <div
            className="py-2 px-2 cursor-pointer hover:bg-gray-100"
            onClick={onMenuClick}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
