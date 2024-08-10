import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const [products,setProduct]=useState([])

  useEffect(()=>{

    axios.get('https://dummyjson.com/products').then((res)=>{

      console.log(res);
      setProduct(res.data.products);

    }).catch((error)=>{
      console.log(error)
    })



  },[])
  console.log(products,"productdetails")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSearch=(e)=>{

    let data=e.target.value;
    data=data.toLowerCase()
    console.log(data)

    axios.get(`https://dummyjson.com/products/search?q=${data}`).then((res)=>{
      console.log(res);
      setProduct(res.data.products)
    }
    ).catch((error)=>{
      console.log(error)
    });

    
    
  }

  return (
    <>
      <Typography gutterBottom variant="h4" component="div" sx={{color:"brown" , textAlign:"center",margin:"10px"}}>
        Shop Products
      </Typography>
      <Box sx={{ display: 'flex',
         alignItems: 'flex-end',
         justifyContent:'flex-end',
         marginRight:'150px' }}>
        < SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField sx={{width:"500px"}}
         id="input-with-sx" 
         label="Search for product"
          variant="standard"
          onChange={handleSearch} />
      </Box>
    <div style={{display:'flex', flexWrap:'wrap',margin:'20px', gap:'20px',justifyContent:'center' , alignItems:'center'}}>
    {  products.length>0? products.map((item,index)=>{
      return(

   
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{color:'black'}} />
          </IconButton>
        }
        title={item.title}
        subheader={item.category}
        sx={{ color:'#f88973'}}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.thumbnail}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>
        <Typography variant="h4" color="black" margin='7px'>
        Rs/-{item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:'red'}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{color:'black'}} />
        </IconButton>
        <ExpandMore 
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
     
    
          <div style={{display:'flex' , gap:'15px'}}>
          <Typography paragraph><b>Brand:</b></Typography>
          <Typography paragraph>
           {item.brand}
          </Typography>
          </div>
          <div style={{display:'flex' , gap:'15px'}}>
          <Typography paragraph><b>Ratings:</b></Typography>
          <Typography paragraph>
           {item.rating}
          </Typography>
          </div>
          <div style={{display:'flex' , gap:'15px'}}>
          <Typography paragraph><b>Shipping:</b></Typography>
          <Typography paragraph>
           {item.shippingInformation}
          </Typography>
          </div>
        
        </CardContent>
      </Collapse>
    </Card>
       )
      }): "No product found"}
      </div>
    </>
  );
}

