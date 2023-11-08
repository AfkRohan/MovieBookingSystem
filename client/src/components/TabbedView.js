import React, { useState } from 'react';
import { Button, Tabs } from 'antd';
const TabbedView = (props) => {
  const shows = (props.shows);
  console.log("tabs");
  const removeDuplicateDates = (dates) => {
    const uniqueDates = [];
    const seenDates = new Set();
    for (const date of dates) {
      const dateString = new Date(date).toDateString();
      if (!seenDates.has(dateString)) {
        uniqueDates.push(date);
        seenDates.add(dateString);
      }
    }
    return uniqueDates;
  }
  const dates = removeDuplicateDates(props.dates);
  console.log();
  return (
    <>
      <Tabs
        tabPosition={"top"}
        centered={true}
        className='centerDivStyle p3'
        tabBarStyle={{background:"white", padding:"5px"}}
        tabBarGutter={50}
        items={(dates).map((date) => {
          const tarikh = new Date(date).toDateString();
          return {
            label: ` ${tarikh}`,
            key: tarikh,
            children: <div className='p2'> {shows.map((show)=>{
                if(new Date(show.showDate.toString()).toDateString() == tarikh)
                    return <Button style={{margin:'5px'}}> {show.showTime} </Button>
            }) } </div>,
          };
        })}
      />
    </>
  );
};
export default TabbedView;