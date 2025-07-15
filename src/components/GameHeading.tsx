import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface GameHeadingProps {
    gameQuery: GameQuery;
}

const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

    return <Heading as={"h1"} marginY={5} fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
