import { Box, Heading } from "@chakra-ui/react";

interface DefinitionItemProps {
    term: string;
    children: React.ReactNode | React.ReactNode[];
}

// <dt> - Definition Term
// <dd> — Definition Description
const DefinitionItem: React.FC<DefinitionItemProps> = ({ term, children }) => {
    return (
        <Box marginY={5}>
            <Heading as="dt" fontSize="md" color="gray.600">
                {term}
            </Heading>
            <dd>{children}</dd>
        </Box>
    );
};

export default DefinitionItem;
