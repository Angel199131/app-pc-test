import React, {useState} from 'react'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import Link from '@mui/material/Link'
import Bar from './Bar'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


const Tracking = () => {

  const [track, setTrack] = useState('')

  return (
    <div>
      <Bar/>
      <Grid paddingTop={1}>
        <Paper elevation={1}>
          <Box display='flex'>
            <Link href={"/cart/" + track}>
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </Link>
            <InputBase fullWidth value={track} onChange={e => setTrack(e.target.value)}/>
          </Box>
        </Paper>
      </Grid>
    </div>
  )

}

export default Tracking

