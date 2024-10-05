import { Container } from "@mui/material";

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100dvw",
        height: "100dvh",
        bgcolor: "rgba(0, 0, 0, 0.1)",
    },
    app: {
        width: {xs: "100%", sm: "460px"},
        height: {xs: "100%", sm: "960px"},
        maxHeight: "100dvh",
    }, 
}

const Template = ({children}: {children: React.ReactNode}) => {
    return (
        <Container className="template" disableGutters sx={styles.container}>
            <Container className="template-app" disableGutters sx={styles.app}>
                    {children}
            </Container>
        </Container>
    )
}

export default Template;    