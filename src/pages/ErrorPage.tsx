import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar />

            <Box padding={5}>
                <Heading>OOPS... 👾</Heading>
                <Text>{isRouteErrorResponse(error) ? "This page does not exist." : "An unexpected error occurred ⚠️"}</Text>
            </Box>
        </>
    );
};

export default ErrorPage;
