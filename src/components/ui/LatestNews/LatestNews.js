import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";

import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async() => {
  const {data} = await getAllNews();
  console.log(data)
  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image src={data[0].thumbnail_url} width={800} height={500} alt="Top News" />
        </CardMedia>
        <CardContent>
          <p className="w-fit bg-red-600 text-white p-1.5 rounded my-2">
            {data[0].category}
          </p>
          <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
          </Typography>
          <Typography className="my-3" gutterBottom variant="p" component="div">
            {data[0].author.name} - {data[0].author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[0].details.slice(0, 200)+ '...'}
          </Typography>
        </CardContent>
      </Card>

      <Grid className="mt-6" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {
        data.map(news=>  
        <Grid key={news.id} item xs={6}>
          <Card>
          <CardMedia>
            <Image className="h-[200px]" src={news.thumbnail_url} width={800} height={200} alt="Top News" />
          </CardMedia>
          <CardContent>
            <p className="w-fit bg-red-600 text-white p-1.5 rounded my-2">
              {news.category}
            </p>
            <Typography gutterBottom  component="div">
              {news.title}
            </Typography>
            <Typography className="my-3" gutterBottom variant="p" component="div">
              {news.author.name} - {news.author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.details.slice(0, 200)+ '...'}
            </Typography>
          </CardContent>
        </Card>
          </Grid>)
       }
        
      </Grid>
    </Box>
  );
};

export default LatestNews;
