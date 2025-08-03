import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";



const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(selector => selector.setSearchText)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (ref.current) {
            setSearchText(ref.current.value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
