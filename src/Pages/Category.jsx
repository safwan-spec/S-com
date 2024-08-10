import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function Category() {
    const[category,setCategory]=useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories').then((res)=>{

            console.log(res);
            setCategory(res.data)

        }
    ).catch((error)=>{
        console.log(error)

    }
    )

    },[])

  
    console.log(category,"categories");


  return (
    < >
      <Typography gutterBottom variant="h4" component="div" sx={{color:"brown" , textAlign:"center",margin:"10px"}}>
        Browse product categories
      </Typography>
    <Grid container spacing={2} sx={{margin:"10px",padding:'10px',display:"flex",flexWrap:"wrap",
      alignItems:"center", justifyContent:"center"
    }}>

    {category.map((item,i)=>{

      return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345,backgroundColor:"#f88973", }}>
      <CardActionArea>
        <CardContent>
         <Link to={`/cat-product/${item.name}`}>
          <Typography gutterBottom variant="h5" component="div" style={{justifyContent:"center", textAlign:"center"}}>
            {item.name}
          </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
      )
    }
  )
}
</Grid>

  </>
  )}