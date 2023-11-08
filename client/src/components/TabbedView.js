import React, { useState } from 'react';
import { Button, Tabs } from 'antd';
const TabbedView = (props) => {
  const shows = props.shows;
  return (
    <>
      <Tabs
        tabPosition={"top"}
        centered={true}
        className='centerDivStyle p3'
        tabBarStyle={{background:"white", padding:"5px"}}
        tabBarGutter={50}
        items={(props.dates).map((date) => {
          const tarikh = new Date(date).toDateString();
          return {
            label: ` ${tarikh}`,
            key: tarikh,
            children: shows.map((show)=>{
                if(show.showDate == date)
                    return <Button > {show.showTime} </Button>
            }),
          };
        })}
      />
    </>
  );
};
export default TabbedView;