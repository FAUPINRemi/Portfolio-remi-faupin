import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function NavbarComponent() {
  return (
    <Navbar shouldHideOnScroll className="fixed top-0 left-0 w-full">
      <NavbarContent className="flex justify-center w-full">
        <div className="flex gap-8 justify-center w-full">  
          <NavbarItem>
            <Link color="foreground" href="#" className="text-black gilmer-regular text-[20px]">
              A propos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#" className="text-black gilmer-regular text-[20px]">
              Projets
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-black gilmer-regular text-[20px]">
              Expériences
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>
    </Navbar>
  );
}