/* eslint-disable react/prop-types */
import Rating from '@mui/material/Rating';

const Ratings = ({rating}) => {
 

  return (
    <div>
       <Rating style={{color:'green'}} value={rating} readOnly />
    </div>
  )
}

export default Ratings