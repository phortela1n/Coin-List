import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Slide } from "@material-ui/core";

function Example(props) {
  const data = props.props;
  console.log(data);
  let items2 = [];
  data.map((elem) => items2.push({ elem }));
  console.log("hola", items2);
  const items = [
    {
      name: "Random name 1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      interval={2000}
      animation={"slide"}
      indicator={true}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} data={data.name} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  console.log("Las tengo", props.data);
  return (
    <Paper>
      <h2>{props.data}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Example;
