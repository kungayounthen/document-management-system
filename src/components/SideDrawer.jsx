import { Outlet, useNavigate } from "react-router-dom";
import './sideDrawer.styles.css';
import { Box, Button, Divider } from "@mui/material";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import SearchIcon from '@mui/icons-material/Search';
import WindowIcon from '@mui/icons-material/Window';
import LogoutIcon from '@mui/icons-material/Logout';

function SideDrawer() {
  const navigate=useNavigate();
  return (
    <>
      <Box className="flex  uploadContainer ">
        <Box className="flex flex-col h-[95%] w-1/5 transparent ml-5 my-auto rounded-md p-3 border shadow-lg shadow-slate-500" component='main'>
          <h3 className="text-center capitalize font-bold text-lg my-5 text-indigo-500">Document <br /> management</h3>
          <Divider className="w-full self-center" />
          <Box className="grid gap-3 my-5 ml-4">
            <Box className='flex items-center content-center gap-2 hover:bg-slate-300 hover:cursor-pointer active:bg-slate-400 rounded-md p-3' onClick={()=>navigate('/upload')}>
              <UploadFileRoundedIcon />
              <h3 className="capitalize ">upload document</h3>
            </Box>
            <Box className='flex items-center content-center gap-2 p-3 hover:bg-slate-300 hover:cursor-pointer active:bg-slate-400 rounded-md' onClick={()=>navigate('search')}>
            <SearchIcon/>
            <h3 className="capitalize">Search document</h3>
            </Box>
            <Box className='flex items-center content-center gap-2 p-3 hover:bg-slate-300 hover:cursor-pointer active:bg-slate-400 rounded-md'>
            <WindowIcon/>
            <h3 className="capitalize">View Playlist</h3>
            </Box>
          </Box>
          <Box className='mt-auto w-full mb-5'>
          <Button variant="contained" className="flex gap-2 w-full" onClick={()=>navigate('/login')}><h3>Logout</h3><LogoutIcon/></Button>
          </Box>
        </Box>
        <Outlet />
      </Box>
    </>
  )
}

export default SideDrawer