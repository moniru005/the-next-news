import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
//   console.log(data);
  return (
    <Box className="my-5">
      <Container>
        {/* images */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Image src={news.thumbnail_url} width={800} height={500} alt="News"/>
            
            <Grid className="mt-1" container spacing={2}>
                <Grid item xs={6}>
                <Image src={news.image_url} width={800} height={500} alt="News"/>
                </Grid>
                <Grid item xs={6}>
                <Image src={news.image_url} width={800} height={500} alt="News"/>
                </Grid>
            </Grid>
          </Grid>

          {/* Details */}
          <Grid item xs={6}>
            <Typography variant="h5" component="h2">
                {news.title}
            </Typography>
            <Box sx={{
                display: "flex",
                gap: 3,
                alignItems: "center"
            }}>
                <Avatar src={news.author.img} alt="author"/>
                <Typography>
                    by {news.author.name}
                </Typography>
                <Typography>
                    Published: {news.author.published_date}
                </Typography>
            </Box>
            <Typography style={{
                    textAlign: 'justify',
                    whiteSpace: 'pre-line',
                    margin: "15px 0px",
                }}>
                    {news.details}
                </Typography>
                <Typography variant="h6">
                ``Many desktop publishing packages and web page editors now use as their default model text!
                </Typography>
                <Typography variant="p">
                -- Awlad Hossain
                </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;
