import { Typography } from "@mui/material"
import { WelcomeProps } from "./Welcome.types"
import { BoxCard } from "../Box/Box.style"

export const Welcome = ({name,lastname,address}:WelcomeProps) => {
  return (
    <BoxCard>
        <Typography variant="h1">{name}</Typography>
        <Typography variant="h2">{lastname}</Typography>
        <Typography variant="h3">{address}</Typography>
    </BoxCard>
  )
}

