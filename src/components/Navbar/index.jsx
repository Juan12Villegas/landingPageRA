import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import styles from "./navbarStyle.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function App() {
    const router = useRouter();

    const menuItems = ["Inicio", "Sobre el restaurant", "Categorías", "Recomendaciones"];

    const [selectedNavItem, setSelectedNavItem] = React.useState(menuItems[0]);

    const handleNavItemSelect = (item) => {
        router.push("/")
        setSelectedNavItem(item);
    };

    return (
        <Navbar className="content-navbar bg-blue-600 justify-start pl-[100px] fixed w-[100%] h-[60px] z-[100] top-0">
            <NavbarBrand>
                <ScrollLink
                    to="title"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`hover:cursor-pointer ${selectedNavItem === "title" ? "" : ""}`}
                    onClick={() => handleNavItemSelect("title")}
                >
                    <div className='contentBusiness flex gap-2.5 items-center'>
                        <img src="/images/logoRancho.jpeg" alt="" className='w-[30px] rounded-[50%]' />
                        <p className='font-bold mb-0'> El Rancho de mi Mamá </p>
                    </div>
                </ScrollLink>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className={`hover:cursor-pointer ${selectedNavItem === "about" ? "" : ""}`}
                        onClick={() => handleNavItemSelect("about")}
                    >
                        Sobre el restaurant
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem>
                    <ScrollLink
                        to="categories"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className={`hover:cursor-pointer ${selectedNavItem === "categories" ? "" : ""}`}
                        onClick={() => handleNavItemSelect("categories")}
                    >
                        Categorías
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem>
                    <ScrollLink
                        to="recommendations"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className={`hover:cursor-pointer ${selectedNavItem === "recommendations" ? "" : ""}`}
                        onClick={() => handleNavItemSelect("recommendations")}
                    >
                        Recomendaciones
                    </ScrollLink>
                </NavbarItem>
            </NavbarContent>

            {/* <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent> */}
        </Navbar>
    );
}
