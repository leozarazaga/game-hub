import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../hooks/useGames";

interface PlatformSelectorProps {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ onSelectPlatform, selectedPlatform }) => {
    const { data, error, isLoading } = usePlatforms();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
