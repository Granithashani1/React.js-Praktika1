import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {} from "../img/Carouselstyle.css";
import { Container, Row } from "react-bootstrap";

const Cards = () => {
  const fasstfood = [
    {
      id: 1,
      name: "Hamburger",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
    },
    {
      id: 2,
      name: "Steack House",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",

      img: "https://townsquare.media/site/385/files/2021/06/attachment-emerson-vieira-3wzps8KbdCQ-unsplash.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
    },
    {
      id: 3,
      name: "Pizza ",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg",
    },
    {
      id: 4,
      name: "Pizza ",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://i.pinimg.com/originals/95/33/79/9533794df04871f13da3bfa1223b187b.jpg",
    },
    {
      id: 5,
      name: "Pizza",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://www.weirdworm.com/wp-content/uploads/2018/08/Pizza.jpg",
    },
    {
      id: 6,
      name: "Steack House ",
      description:
      "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://media.istockphoto.com/id/1286362324/photo/different-kinds-of-grilled-meat-on-the-table-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=s6jHDP7k01nz1qlL8NaA_STtQQZCHP7ka5CHed8ueHs=",
    },
    {
      id: 7,
      name: "Steack House ",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://cdn.vox-cdn.com/thumbor/gKs9B47-Bmpg9pVeLs7HaocdpTA=/0x0:3600x2400/1200x900/filters:focal(1512x912:2088x1488)/cdn.vox-cdn.com/uploads/chorus_image/image/59407087/Top__42oz_Porterhouse__Right__8oz_Beef_Tenderloin__Bottom__18oz_Cowboy_Ribeye____Kirsten_Gilliam_.7.jpg",
    },
    {
      id: 8,
      name: "Steack House ",
      description:
        "Three-storey villa for sale, coht simple f surrounded by a green belt. The condition is very well maintained invested wisely. You are welcome for a visit. ",
      img: "https://telugu.boldsky.com/img/2013/11/06-fish.jpg",
    },
  ];

  return (
    <>
      <Container className="ContainerRow">
        <Row className="row2">
          {fasstfood.map((fast) => (
            <Card style={{ width: "18rem" }} className="cardss">
              <Card.Img variant="top" src={fast.img} className="imgcard" />
              <Card.Body>
                <Card.Title className="colorcards">{fast.id}</Card.Title>
                <Card.Text className="colorcards">{fast.name}</Card.Text>
                <Button variant="primary" className="btncards">Buy</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
