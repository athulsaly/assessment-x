"use client";

import { EmployeeDetails } from "@/components/EmployeeDetails";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UserTile from "@/components/UserTile";
import { getUsers } from "@/lib/routes";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState<UsersResponse>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const getUserData = async () => {
      setUserData(await getUsers());
    };
    getUserData();
  }, []);

  const onCardClick = (user: User) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          Loading....
        </div>
      }
    >
      <div className="flex w-full justify-center">
        <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center gap-y-6 px-2 lg:grid lg:grid-cols-2 xl:grid-cols-3 sm:pb-32 lg:gap-6 xl:gap-x-2 xl:gap-y-6 lg:pt-24 xl:pt-16 lg:pb-26">
          {userData?.users.map((user) => {
            return (
              <>
                <UserTile
                  key={user.username}
                  user={user}
                  onClick={() => onCardClick(user)}
                />
              </>
            );
          })}
        </MaxWidthWrapper>
        {selectedUser && (
          <EmployeeDetails
            user={selectedUser}
            isOpen={isOpen}
            onOpenChange={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
    </Suspense>
  );
}
