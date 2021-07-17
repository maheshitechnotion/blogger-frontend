import React from 'react'
import { Divider, Grid, Typography, TextField, Container } from '@material-ui/core'
import styles from './appBar.module.css'
import Link from 'next/link'
export default function AppBar() {
  return (
    <>
      <Container>
        <Grid container className={styles.container}>
          <Grid item lg={4}>
            <Link href="/">
              <a href="#"><Typography className={styles.textf}>BloggingCoder</Typography></a>
            </Link>
          </Grid>
          <Grid item lg={4}>
            <Typography style={{ textAlign: "right" }}>
              <TextField id="outlined-basic" label="search" variant="outlined" size="small" className={styles.textfiled} />
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography className={styles.textcontainer}>
              <Link href="/blog">
                <a className={styles.text}>Blog</a>
              </Link>
              <Link href="/addblog">
                <a className={styles.text}>Add blog</a>
              </Link>
              <Link href="/blog">
                <a className={styles.text}>contact us</a>
              </Link>
              <Link href="/other">
                <a className={styles.text}>other</a>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  )
}

