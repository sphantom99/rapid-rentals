"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { Session } from "next-auth";

type TAvatarProps = {
  session: Session | null;
};
function Avatar(props: TAvatarProps) {
  const { session } = props;
  console.log(session);

  return (
    <>
      {session ? (
        <div className="flex flex-row gap-2 justify-between items-center align-center">
          <Menu>
            <Menu.Button>
              <Image
                className="rounded-full"
                alt="image of user"
                width={30}
                height={30}
                src={session?.user?.image || "/wheelIcon.png"}
              />
            </Menu.Button>
            <Menu.Items className="absolute top-12 right-2 rounded-tl-none  flex flex-col gap-1 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${active && "bg-yellow-400 text-white"}  p-2 `}
                    href="/profile"
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${active && "bg-yellow-400 text-white"}  p-2 `}
                    href="/api/auth/signout"
                  >
                    Sign out
                  </Link>
                )}
              </Menu.Item>
              {session.user.isAdmin && (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active && "bg-yellow-400 text-white"
                      }  p-2 `}
                      href="/AddCar"
                    >
                      Add a Car
                    </Link>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Menu>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </>
  );
}

export default Avatar;
