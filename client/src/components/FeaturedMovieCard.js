import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
function HomePageMovieCard(props) {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={props.movie.name} src={props.movie.image} />}
  >
    <Meta title={props.movie.title} description={props.movie.description} />
  </Card>
  )
}

export default HomePageMovieCard