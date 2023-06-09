import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./index.css"
import "./wish.css"
import Photo from "../week15/data.json"
import PostedStamp from "../Postedstamp"
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Image from "mui-image"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Box, Button, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Card2({ user }) {
    const { name, grade, imgSrc, wish, id, imgSrc2 } = user
    console.log(user)
    const [showFront, setShowFront] = useState(true)

    function handleClipWish() {
        setShowFront(false)
    }
    function handleCloseBackContent() {
        setShowFront(true)
    }

    // useEffect(() => {
    //     axios.get(imgSrc).then(res => {
    //         console.log(res)
    //     })
    // }, [])

    var cardContent = showFront ?
        <ContentPostalFront imgSrc={imgSrc} sealVariant={5} name={name} grade={grade} wish={wish} imgSrc2={imgSrc2} onClick={handleClipWish} /> :
        <ContentPostalBack imgSrc={imgSrc} wish={wish} onClick={handleCloseBackContent} />

    return (
        <Card sx={{ maxWidth: 345, margin: "auto", height: 587 }} id={id}>
            <div id={`${id}`}></div>
            {/* {cardContent} */}
            <div className="card-content">
                <div class="background">
                    <Sender name={name} grade={grade}/>
                    <Wish wish={wish} />
                    <PostedStamp imgSrc={imgSrc} />
                    <PhotoUpload imgSrc2={imgSrc2} />
                    
                </div>
            </div >
        </Card>

    );
}
function Sender({ name, grade }) {
    return (
        <div className="stamp-section">
            <div className="sender-info">
                <div className="sender">
                    <div className="sender-text">From:</div>
                </div>
                <div className="sender-name">
                    <div className="sender-name-text">{name}</div>
                </div>
                <div className="sender-grade">
                    <div className="sender-grade-text">{grade}</div>
                </div>
            </div>
        </div>

    )
}


function Wish({ wish }) {
    return (
        <div className="wish">
            <div className="wish-text">
                <Button>
                    <q>
                        <Typography>{wish}</Typography>
                    </q>
                </Button>
            </div>
            {/* <div className="wish-text">{wish}</div> */}
        </div>
    )
}

function PhotoUpload({ imgSrc2 }) {
    return (
        <div className="photo-upload">
            <img className="photo" src={imgSrc2} />
        </div>
    )
}

function ContentPostalFront({ imgSrc, sealVariant, name, grade, wish, imgSrc2, onClick }) {

    return (
        <CardContent>
            <Stack spacing={0}>
                <Box>
                    <PostedStamp imgSrc={imgSrc} sealVariant={sealVariant} />
                </Box>
                <Box mt={5} pl={3}>
                    <Sender name={name} grade={grade} />
                </Box>

                <Box mt={3}>
                    <Button color='primary' onClick={onClick}>
                        <Typography noWrap sx={{ width: "300px" }}>{wish}</Typography>
                    </Button>
                </Box>
                <Box>
                    <PhotoUpload imgSrc2={imgSrc2} />
                </Box>
            </Stack>
        </CardContent>
    )
}

function ContentPostalBack({ imgSrc, wish, onClick }) {

    const [showPic, setShowPic] = useState(false)

    function handleToggle() {
        if (showPic) {
            setShowPic(false)
        } else {
            setShowPic(true)
        }
    }

    var op = showPic ? 1 : 0.3
    var vs = showPic ? "hidden" : "visible"

    return (

        <div style={{ height: "100%", position: "relative" }}>

            <Image
                duration={0}
                src={imgSrc}
                fit="cover"
                style={{ opacity: op }}
            />
            <div style={{ position: "absolute", top: "0", height: "100%", visibility: vs }}>
                <Stack sx={{ height: "100%", justifyContent: "center" }}>
                    <Container>
                        <Box>
                            <Typography>
                                {wish}
                            </Typography>
                        </Box>
                    </Container>
                </Stack>
            </div>
            <div style={{ position: "absolute", bottom: "0%", width: "100%" }}>
                <Container><CustomizedSwitches onChange={handleToggle} /></Container>
            </div>
            <IconButton
                aria-label="close"
                sx={{
                    position: 'absolute',
                    color: (theme) => theme.palette.grey[500],
                    right: 8,
                    top: 8
                }}
                onClick={onClick}
            >
                <CloseIcon />
            </IconButton>
        </div>

    )
}