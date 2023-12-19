import Rating from '@mui/material/Rating';




const Ratings = ({rating}) => {
 

  return (
    <div>
       <Rating style={{color:'green'}} name="read-only" value={rating} readOnly />
    </div>
  )
}

export default Ratings