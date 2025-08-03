import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
    const { data, error, isLoading } = usePlatforms();
    const setSelectedPlatformId = useGameQueryStore((selector) => selector.setPlatformId);
    const selectedPlatformId = useGameQueryStore((selector) => selector.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
