import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
function HomePageMovieCard(props) {
  return (
    <Card
    hoverable
    onClick={()=>window.location.href=`movie/${props.movie._id}/${props.movie.name}`}
    style={{
      width: 240,
    }}
    cover={<img alt={props.movie.name} src={props.movie.image} />}
  >
    <Meta  title={props.movie.title} description={props.movie.description.slice(0,100)} />
  </Card>
  )
}

export default HomePageMovieCard