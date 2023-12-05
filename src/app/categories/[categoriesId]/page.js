import { getCategoryNews } from "@/utils/getCategoryNews";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  // console.log(searchParams)
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div className="my-5">
      <h2>
        Total <span className="font-semibold">{searchParams.category} </span>
        news: {data.length}{" "}
      </h2>

      <Grid
        className="mt-6"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardMedia
                  sx={{
                    "& img": { width: "100%", height: "250px" },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    width={800}
                    height={100}
                    alt="Top News"
                  />
                </CardMedia>
                <CardContent>
                  <p className="w-fit bg-red-600 text-white p-1.5 rounded my-2">
                    {news.category}
                  </p>
                  <Typography gutterBottom variant="h6" component="div">
                    {news.title.length > 30
                      ? news.title.slice(0, 30) + "..."
                      : news.title}
                  </Typography>
                  <Typography
                    className="my-3"
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.length > 200
                      ? news.details.slice(0, 200) + "..."
                      : news.details}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
