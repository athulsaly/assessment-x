import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="sticky z-10 h-14 inset-x-0 top-0 width-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-20 font-semibold text-green-600">
            Employees
          </Link>
          <div className="flex w-full max-w-xl items-center justify-end space-x-10">
            <div className="flex w-full items-center justify-between space-x-2">
              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
              <Link
                href="/"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "hidden lg:flex",
                })}
              >
                Dashboard
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "hidden lg:flex",
                })}
              >
                Messages
              </Link>

              <Input
                type="text"
                className="w-56 h-8 hidden lg:flex"
                placeholder="Enter keyword to search..."
              />
              <Link href="/">
                <Button className="h-8 hidden lg:flex">Search</Button>
              </Link>
            </div>
            <HamburgerMenu />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
