import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideTopNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image src={sideTopNews} width={800} alt="Top News" />
        </CardMedia>
        <CardContent>
          <p className="w-fit bg-red-600 text-white p-1.5 rounded my-2">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography className="my-3" gutterBottom variant="p" component="div">
            By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SideBar;
