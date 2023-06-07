import {AiFillStar,AiOutlineStar} from "react-icons/ai";
const Rating = ({rating,style,onClick}) => {
    return (
      <span>
          {
              [...Array(5)].map((_, i) => {
                  return(
                      <span key={i} onClick={() => onClick(i)} style={style}>
                          {rating > i ? (<AiFillStar style={{fontSize: 20,marginLeft: 10}}/>) : (<AiOutlineStar style={{fontSize: 20,marginLeft: 10}}/>)}
                      </span>
                  )
              })
          }
      </span>
    )
}
export default Rating;