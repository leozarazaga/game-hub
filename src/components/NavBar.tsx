import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo-pink-turquoise.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Link to="/">
                <Image src={logo} boxSize="60px" objectFit="cover" width="16" height="auto" borderRadius="10" />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
