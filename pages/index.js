import AppBar from '../componet/AppBar/appbar'
import React from "react";
import {
    Card,
    Grid,
    Container,
    Typography,
    CardMedia,
    CardContent
} from '@material-ui/core';
import styles from "../styles/Home.module.css"
import { cardData } from '../componet/Card/cardData'

const Home = () => {

    // console.log("====",data.img)
    return (
        <>
            <AppBar />
            <Container>
                <Typography className={styles.lableText}>Get smarter about what you read</Typography>
                <Grid container spacing={4} justifyContent="center" style={{ marginTop: "12px" }}>
                    {cardData.map((data) =>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Card className={styles.card}>
                                {/* <CardMedia
                                    image={data.img}
                                    height="140"
                                    width="140"
                                /> */}
                                <img src={data.img} width="100%" height="100%" />
                                <CardContent>
                                    <Typography className={styles.title}>
                                        {data.name}
                                    </Typography>
                                    <Typography className={styles.text}>
                                        {data.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default Home;