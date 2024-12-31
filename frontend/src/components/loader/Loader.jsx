import { Stack, Skeleton as BouncingSkeleton, Typography } from "@mui/material"

export const TypingLoader = () => {

    return (
        <Stack
            spacing={"0.5rem"}
            direction={"row"}
            padding={"0.5rem"}
            justifyContent={"center"}
        >
            <Typography color="green" fontSize={"1.5 rem"} fontWeight={"600"}>THINKING...</Typography>
            <BouncingSkeleton variant='circular' width={25} height={25} style={{ animationDelay: '0.1s', }} />
            <BouncingSkeleton variant='circular' width={25} height={25} style={{ animationDelay: '0.1s', }} />
            <BouncingSkeleton variant='circular' width={25} height={25} style={{ animationDelay: '0.1s', }} />
            <BouncingSkeleton variant='circular' width={25} height={25} style={{ animationDelay: '0.1s', }} />

        </Stack>
    )
}