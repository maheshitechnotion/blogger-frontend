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
    FormControlLabel,
    Switch,
    Checkbox
} from '@material-ui/core'
import styles from '../styles/addblog.module.css'
import FormData from 'form-data';
// import ReactQuill from 'react-quill'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const AddBlog = () => {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [file, setFile] = useState('')
    const [content, setContent] = useState('')
    const [SEOtitle, setSEOtitle] = useState('')
    const [SEOdesc, setSEOdesc] = useState('')
    const [publishDate, setPublishDate] = useState('')
    const [Published, setPublished] = useState(false)
    const [category, setcategory] = useState('')
    const [publishGlobal, setPublishGlobal] = useState(false)
    const [comment, setComment] = useState(false)

    // let data = new FormData();
    // data.append('title', 'blog3');
    // data.append('body', 'awrfewegv');
    // data.append('categories', '5e84812fe77f162234746cd0');
    // data.append('tags', '5ead5f603a09e02a2096ea64');
    // data.append('postedBy','60f17d1982957f7a8d4ae6d4')

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYxN2QxOTgyOTU3ZjdhOGQ0YWU2ZDQiLCJpYXQiOjE2MjY0Mzg5NjYsImV4cCI6MTYyNjUyNTM2Nn0.JC0hRvQFi3-5Fj-7_eCZi2I6Q5evs0pduSXK8iyoGvc"

    const publish = () => {
        alert(`blog title :=  ${title} 
        description :=  ${description} 
        file := ${file}
        content := ${content}
        SEOtitle := ${SEOtitle}
        SEOdescription := ${SEOdesc}
        publish Date := ${publishDate}
        Schedule Publish := ${Published}
        category := ${category}
        publish globaly or not := ${publishGlobal}
        comment enable or not := ${comment}`
        )
        // axios.post('http://localhost:8000/api/blog',
        //     {
        //         headers: {
        //             'Authorization': `Bearer ${token}`
        //         }
        //     },
        //     { data: data }
        // )
        //     .then(res => {
        //         console.log("---response---: ", res);
        //         alert("publish blog successfully!!!")
        //     })
        //     .catch(err => {
        //         console.log("---Error---: ", err);
        //     })
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
                <Grid container className={styles.maincontainer} spacing={4}>
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
                                    value={description}
                                    label="Short description"
                                    rows={6}
                                    variant="outlined"
                                    className={styles.description}
                                    onChange={(e) => (setdescription(e.target.value))}
                                />
                                <Typography className={styles.lableText}>cover</Typography>
                                <TextField
                                    value={file}
                                    type="file"
                                    variant="outlined"
                                    className={styles.coverfield}
                                    onChange={(e) => (setFile(e.target.value))}
                                />
                                <Typography className={styles.lableText}>content</Typography>
                                <ReactQuill
                                    value={content}
                                    placeholder="write something"
                                    // style={{height:"200px"}}
                                    onChange={setContent}
                                    // className={styles.quill}
                                />
                                    {/* <Grid className={styles.quilcontainer}/> */}
                                {/* </ReactQuill> */}
                            </Grid>
                        </Grid>
                        <Grid className={styles.leftSecondContainer}>
                            <Grid style={{ margin: 20 }}>
                                <Typography className={styles.metaText}>Meta</Typography>
                                <TextField
                                    label="SEO Title"
                                    value={SEOtitle}
                                    variant="outlined"
                                    className={styles.seotitle}
                                    onChange={(e) => setSEOtitle(e.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    value={SEOdesc}
                                    rows={4}
                                    label="SEO description"
                                    variant="outlined"
                                    className={styles.description}
                                    onChange={(e) => setSEOdesc(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid className={styles.rightcontainer}>
                            <Grid style={{ margin: 20 }}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            color="primary"
                                            value={Published}
                                            onChange={() => setPublished(!Published)}
                                        />
                                    }
                                    label="Schedule Publish"
                                />
                                <TextField
                                    type="date"
                                    variant="outlined"
                                    value={publishDate}
                                    className={styles.Filed}
                                    onChange={(e) => (setPublishDate(e.target.value))}
                                />
                                <Typography className={styles.categoryText}>Categories</Typography>
                                <NativeSelect
                                    defaultValue="Programming"
                                    className={styles.category}
                                    value={category}
                                    onChange={(e) => (setcategory(e.target.value))}
                                >
                                    <option value="Programming">Programming</option>
                                    <option value="Health">Health</option>
                                    <option value="Innovation">Innovation</option>
                                </NativeSelect>
                                <Typography>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value={publishGlobal}
                                                onChange={() => (setPublishGlobal(!publishGlobal))}
                                                color="primary"
                                            />
                                        }
                                        label="Published Globally"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                value={comment}
                                                onChange={() => (setComment(!comment))}
                                            />
                                        }
                                        label="Enable Comments"
                                    />
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