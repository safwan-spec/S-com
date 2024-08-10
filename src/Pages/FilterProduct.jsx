import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function FilterProduct() {
    const { catname}=useParams()
    console.log(catname,"catname")
    const [product , setProduct] = React.useState([])
    useEffect(()=>{

axios.get(`https://dummyjson.com/products/category/${catname}`).then((res)=>{

    console.log(res,"res");
    setProduct(res.data.products)
    

}
).catch((error)=>{
console.log(error)

}
)

    },[catname])
    console.log(product,"productdetails");
    console.log(catname,"catname")
  return (
    <>
      <Typography gutterBottom variant="h4" component="div" sx={{color:"brown" , textAlign:"center",margin:"10px"}}>
       <b> {catname} Products</b>
      </Typography>
    <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", margin:"20px", gap:"15px",justifyContent:"center"}}>

        { product.length>0? product?.map((item, i)=>{
            return(
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        sx={{height:140}}
        image={item.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#a24320"}}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>
        <Typography gutterBottom variant="h4" color="text.secondary" >
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{background:"#a24320", color:"white"}}>Share</Button>
        <Button size="small" sx={{background:"#a24320", color:"white"}}>Learn More</Button>
      </CardActions>
    </Card>
            )
  }):"No data found for this category"}
    </div>
    </>
  )
}

export default FilterProduct
