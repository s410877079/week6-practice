import * as React from 'react';
import { Main } from '../Layout';
import { NavbarCustom, NavbarItem } from '../NavbarCustom';
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card from '../Card'; 
import { IconButton } from '@mui/material';
import dataJson from './data.json'
import { Gallery, GalleryItem } from '../Layout2';


export default function App() {
    
    // const style = {margin:"auto", width: "370px"};
    console.log(dataJson)
    const users = convertUsersToArrayOfObject(dataJson)

    const style={margin: 'auto', width: "370px"};

    const cards = users.map((e, i) => {
        return (
            <GalleryItem key={i}>
                <Card user={e}/>
            </GalleryItem>
        )
    })
    
    // console.log(style)
    return (
        <div className="App">
            {/* <Card user={users[2]} style={style}/> */}
            <Gallery>
                {cards}
            </Gallery>
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

function convertUsersToArrayOfObject(users) {
    const pos = getUserPositionIndex(users[0])

    const usersArrayOfObject = users.map(
        (user) => {
            return getUser(user, pos)
        }
    )
    usersArrayOfObject.shift()
    return usersArrayOfObject
}

function getUser(targetUser, pos) {
    return (
        {
            name: targetUser[pos.name],
            grade: targetUser[pos.grade],
            imgSrc: targetUser[pos.imgSrc],
            wish: targetUser[pos.wish],
            imgSrc2: targetUser[pos.imgSrc2]
        }
    )
}
function getUserPositionIndex(user0) {
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    pos.imgSrc2 = pos.Photo
    return pos
}

function test() {
    user0 = ['Timestamp', 'Email Address', 'Name', 'Photo', 'Grade', 'Wish', 'ThumbnailLink']
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    pos.imgSrc2 = pos.Photo
    return pos
}