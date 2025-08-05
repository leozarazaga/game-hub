import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import type Platform from "../entities/Platform";

interface PlatformIconListProps {
    platforms: Platform[];
}

const PlatformIconList: React.FC<PlatformIconListProps> = ({ platforms }) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <HStack marginY={"10px"}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
