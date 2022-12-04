import React from "react";
import { dashboardHomeDisplay } from "../../../../utils/dashboardHomeDisplay";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@material-ui/core";

const DashboardHome = () => {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {dashboardHomeDisplay.map((wephcoService, index) => (
          <Grid item key={index} xs={3} sm={3} md={4}>
            <Link to={wephcoService.url}>
              <Card className="m-3" style={{width:'15rem'}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height='150'
                    image={wephcoService.imageUrl}
                    alt={wephcoService.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {wephcoService.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DashboardHome;
