import * as React from 'react';
import {Main} from "../components/Layout";
import { NavbarCustom, NavbarItem } from "../components/NavbarCustom";
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card from '../components/Card';
import Stamp from '../components/Stamp';

var imgSrc = "https://lh3.googleusercontent.com/pw/AJFCJaUY7j7Np8CWscMOzg0UTCinm9mwcUDrZA_NjIIJjHf87mwxSV0BBKMGP6LkUH3RVto9DBRjmSf76tq-g9cA75q4ppjvNJeqKN5U76gyKKc-4uv_m6A=w600-h315-p-k"

export default function App() {
    return (
        <div className="App">
            <Main>
                <Stamp/>
            </Main>
            <NavbarCustom>
                <NavbarItem>
                    <PreviousIcon/>
                </NavbarItem>
                <NavbarItem>
                    <PlayIcon/>
                </NavbarItem>
                <NavbarItem>
                    <NextIcon/>
                </NavbarItem>
            </NavbarCustom>
        </div>
    )
}