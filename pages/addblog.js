import react, { useState } from 'react'
import axios from 'axios'
import AppBar from '../componet/AppBar/appbar'
import {
    Grid,
    Typography,
    TextField,
    Container,
    Divider,
    Button,
    NativeSelect,
    IconButton,
    FormControlLabel,
    Switch,
    InputBase,
    Checkbox
} from '@material-ui/core'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatClearIcon from '@material-ui/icons/FormatClear';
import styles from '../styles/addblog.module.css'
import FormData from 'form-data'

const AddBlog = () => {
    const [title, settitle] = useState('')
    const [body, setBody] = useState('')

    let data = new FormData();
    data.append('title', 'blog3');
    data.append('body', 'awrfewegv');
    data.append('categories', '5e84812fe77f162234746cd0');
    data.append('tags', '5ead5f603a09e02a2096ea64');
    data.append('postedBy','60f17d1982957f7a8d4ae6d4')

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYxN2QxOTgyOTU3ZjdhOGQ0YWU2ZDQiLCJpYXQiOjE2MjY0Mzg5NjYsImV4cCI6MTYyNjUyNTM2Nn0.JC0hRvQFi3-5Fj-7_eCZi2I6Q5evs0pduSXK8iyoGvc"

    const publish = () => {
        axios.post('http://localhost:8000/api/blog',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            },
            { data: data }
        )
            .then(res => {
                console.log("---response---: ", res);
                alert("publish blog successfully!!!")
            })
            .catch(err => {
                console.log("---Error---: ", err);
            })
    }
    return (
        <>
            <AppBar />
            <Container>
                <Grid container className={styles.topcontainer}>
                    <Grid item lg={9}>
                        <Typography style={{ marginTop: 5, color: "#172b4d" }}>Hello , jane Rotanson</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Button variant="outlined" className={styles.cancelBtn}>Cancel </Button>
                        <Button variant="contained" color="primary" className={styles.publishBtn} onClick={publish}>Published changes </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
            <Container>
                <Grid container className={styles.maincontainer} spacing={8}>
                    <Grid item lg={8} md={12} sm={12} xs={12} >
                        <Grid className={styles.leftcontainer}>
                            <Grid style={{ margin: 20 }}>
                                <TextField
                                    value={title}
                                    id="title"
                                    label="Blog Title"
                                    variant="outlined"
                                    className={styles.titleFiled}
                                    onChange={(e) => (settitle(e.target.value))}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    value={body}
                                    label="Short description"
                                    rows={6}
                                    variant="outlined"
                                    className={styles.description}
                                    onChange={(e) => (setBody(e.target.value))}
                                />
                                <Typography className={styles.lableText}>cover</Typography>
                                <TextField
                                    // label="Short description"
                                    type="file"
                                    variant="outlined"
                                    className={styles.coverfield}
                                />
                                <Typography className={styles.lableText}>content</Typography>
                                <Grid className={styles.writingContainer}>
                                    <NativeSelect
                                        defaultValue="h4"
                                        className={styles.normal}
                                        variant="standard"
                                    >
                                        <option value="h1">heading 1</option>
                                        <option value="h2">heading 2</option>
                                        <option value="h3">heading 3</option>
                                        <option value="h4">Normal</option>
                                    </NativeSelect>
                                    <IconButton size="small">
                                        <FormatBoldIcon className={styles.iconbtn} />
                                    </IconButton>
                                    <IconButton size="small">
                                        <FormatItalicIcon className={styles.iconbtn} />
                                    </IconButton>
                                    <IconButton size="small">
                                        <FormatUnderlinedIcon className={styles.iconbtn} />
                                    </IconButton>
                                    <IconButton size="small">
                                        <FormatListNumberedIcon className={styles.iconbtn} />
                                    </IconButton>
                                    <IconButton size="small">
                                        <FormatListBulletedIcon className={styles.iconbtn} />
                                    </IconButton>
                                    <IconButton size="small">
                                        <FormatClearIcon className={styles.iconbtn} />
                                    </IconButton>
                                    <Divider />
                                    <InputBase
                                        fullWidth
                                        multiline
                                        rows={10}
                                        placeholder="Write Something"
                                        className={styles.write}
                                    />

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={styles.leftSecondContainer}>
                            <Grid style={{ margin: 20 }}>
                                <Typography className={styles.metaText}>Meta</Typography>
                                <TextField
                                    label="SEO Title"
                                    variant="outlined"
                                    className={styles.seotitle}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="SEO description"
                                    variant="outlined"
                                    className={styles.description}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid className={styles.rightcontainer}>
                            <Grid style={{ margin: 20 }}>
                                <FormControlLabel control={<Switch color="primary" />} label="Schedule Publish" />
                                {/* <Divider textAlign="left" lableText="left"/> */}
                                {/* <Divider>Or</Divider> */}
                                <TextField
                                    label="date"
                                    variant="outlined"
                                    className={styles.Filed}
                                />
                                <NativeSelect
                                    defaultValue="Programming"
                                    className={styles.normal}
                                >
                                    <option value="Programming">Programming</option>
                                    <option value="Health">Health</option>
                                    <option value="Innovation">Innovation</option>
                                </NativeSelect>
                                <Typography>
                                    <FormControlLabel control={<Checkbox color="primary" />} label="Published Globally" />
                                    <FormControlLabel control={<Checkbox color="primary" />} label="Enable Comments" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AddBlog;