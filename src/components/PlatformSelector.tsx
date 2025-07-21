import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ onSelectPlatform, selectedPlatformId }) => {
    const { data, error, isLoading } = usePlatforms();

    const selectedPlatform = data?.results.find((platform) => platform.id === selectedPlatformId);

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
