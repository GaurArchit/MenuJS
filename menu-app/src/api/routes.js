import { rest } from "msw";
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get("/dishes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Samosa",
          category: "breakfast",
          price: 15.99,
          img: "./Images/img1.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 2,
          title: "Idli",
          category: "lunch",
          price: 1500.99,
          img: "./Images/img2.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 3,
          title: "Pizza",
          category: "breakfast",
          price: 190.99,
          img: "./Images/img3.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 4,
          title: "BananShake",
          category: "shakes",
          price: 150.99,
          img: "./Images/img4.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 5,
          title: "Milssd",
          category: "dinner",
          price: 159.99,
          img: "./Images/img4.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 6,
          title: "Milssd",
          category: "dinner",
          price: 152.99,
          img: "./Images/img6.jpeg",
          dec: "Very good to eat lets enjoy",
        },

        {
          id: 7,
          title: "MilkShake",
          category: "shakes",
          price: 155.99,
          img: "./Images/img7.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 8,
          title: "Milssd",
          category: "lunch",
          price: 159.99,
          img: "./Images/img8.jpeg",
          dec: "Very good to eat lets enjoy",
        },
        {
          id: 9,
          title: "Milssd",
          category: "dinner",
          price: 150.99,
          img: "./Images/img9.jpeg",
          dec: "Very good to eat lets enjoy",
        },
      ])
    );
  }),
];
