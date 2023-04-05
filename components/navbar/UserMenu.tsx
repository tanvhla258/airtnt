"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/api/hooks/useRegisterModal";
import useLoginModal from "@/app/api/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row gap-3 items-center">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition  cursor-pointer"
        >
          Airtnt your home
        </div>
        <div
          onClick={() => {
            toggleOpen();
          }}
          className=" items-center p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row rounded-full cursor-pointer gap-3 transition hover:shadow-md"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white right-0 top-12 text-sm">
          {currentUser ? (
            <div className="flex flex-col cursor-pointer">
              <MenuItem onClick={() => {}} label="My trips" />
              <MenuItem onClick={() => {}} label="My favorites" />
              <MenuItem onClick={() => {}} label="My reservations" />
              <MenuItem onClick={() => {}} label="My properties" />
              <MenuItem onClick={() => {}} label="Airtnt my home" />
              <MenuItem
                onClick={() => {
                  signOut();
                }}
                label="Logout"
              />
            </div>
          ) : (
            <div className="flex flex-col cursor-pointer">
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
