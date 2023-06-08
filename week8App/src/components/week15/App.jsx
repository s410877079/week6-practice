import * as React from 'react';
// import { NavbarCustom, NavbarItem } from '../NavbarCustom';
import './App.css'
import dataJson from './data.json'
import Card2 from '../Card3';
import appConfig from "../week15/appConfig.json"
import SearchAppBar from '../SearchAppBar';
import { Gallery, GalleryItem } from '../Layout2';
import axios from 'axios';
import { useState } from 'react';

export default function App() {

    // const [data, setData] = useState(null)

    // axios.get(appConfig.entryUrl)
    //     .then((response) => {
    //         console.log(response)
    //         if (response.status === 200) {
    //             setData(response.data)
    //         }
    //     })

    console.log(dataJson)
    const users = convertUsersToArrayOfObject(dataJson)

    const style = { margin: 'auto', width: "370px" };

    const cards = users.map((e, i) => {
        return (
            <GalleryItem key={i}>
                <Card2 user={e} />
            </GalleryItem>
        )
    })

    // let appcontent = data ?
    //     <AppContent users={convertUsersToArrayOfObject(data)} /> :
    //     <div>Loading...</div>

    // return (
    //     <div className="App">
    //         {appcontent}
    //     </div>
    // )
    return (
        <div className="App">
            {/* <Card user={users[2]} style={style}/> */}
            <Gallery>
                {cards}
            </Gallery>

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
            id: targetUser[pos.id],
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

function AppContent({ users }) {
    console.log(users)
    window.users = users
    window.autocompleteOptions = [] // autocompleteOptions is a global variable
    users.forEach(e => {
        window.autocompleteOptions.push(
            {
                label: e.name + ' - ' + e.grade,
                id: e.id
            }
        )
    })
    const cards = users.map((e, i) => {
        return (
            <GalleryItem key={i}>
                <Card2 user={e} />
                {/* <Item sx={{height: "300px"}}/> */}
                {/* <Card user={e} style={style}/>   */}
            </GalleryItem>
        )
    })
    return (
        <>
            <div className="main2">
                <Gallery>
                    <>
                        {cards}
                        <div className="endCard" />
                    </>
                </Gallery>
            </div>

            <div className="footer2">
                <SearchAppBar autocompleteOptions={window.autocompleteOptions} />
            </div>
        </>

    )

}