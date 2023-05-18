import * as React from 'react';
import { Main } from '../Layout';
import { NavbarCustom, NavbarItem } from '../NavbarCustom';
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card from '../Card';
import { IconButton } from '@mui/material';



export default function App() {
    const user = {
        name: "Judy Lai",
        grade: "accounting 4A",
        imgSrc: "https://img.onl/EOutZV",
        wish: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!",
        imgSrc2: "https://img.onl/DLQLP9",
    }
    
    return (
        <div className="App">
            <Main>
                <Card user={user} />
            </Main>
            <NavbarCustom>
                <NavbarItem>
                    <IconButton>
                        <PreviousIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    <IconButton>
                        <PlayIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    <IconButton>
                        <NextIcon />
                    </IconButton>
                </NavbarItem>
            </NavbarCustom>

        </div>
    )
}