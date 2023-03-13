import { Box,Card, styled, Tooltip, Typography } from "@mui/material";
const Image = styled('img')(
    {
        height:300,
        width:'100%',
        objectFit: 'cover'
    }
)
const Character = ({ character }) => {
    return(
        <Card>
        <Tooltip title={
            <Box>
             <Typography>Name: {character.name}</Typography>
              <Typography>Real Name: { character.portrayed}</Typography>
                <Typography>Nickname: { character.nickname}</Typography>
                <Typography>Brithday:{ character.birthday}</Typography>
                <Typography>status:{ character.status}</Typography>
            </Box>
        }
           arrow placement="top"
        >
            <Image src={character.img} alt="character" />
            </Tooltip>
        </Card>
    )
}
export default Character;