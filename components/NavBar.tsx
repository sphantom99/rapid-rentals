import Link from "next/link";
import Avatar from "./Avatar";
import ScrollCar from "./scrollCar";

async function NavBar() {

  return (
    <nav className=" top-0 w-full fixed z-20 bg-white pb-4 ">
      <div className="flex flex-row w-full justify-between p-4 px-8 items-center">
        <ScrollCar />
        <li className="flex list-none gap-2 flex-row align-center justify-center items-center ">
          <Link href="/" className="flex flex-row">
            <h1 className=" font-bold text-sm">RapidRentals</h1>
          </Link>
        </li>
        <li className="flex list-none gap-2">
          <Avatar />
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
