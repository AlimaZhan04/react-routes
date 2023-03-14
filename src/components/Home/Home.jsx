import React from "react";
import CardBlock from "../CardBlock/CardBlock";

let cosmetics = [
  {
    image:
      "https://i.pinimg.com/474x/0e/d5/66/0ed566b7ba5ed0e142d5a550c09949ab.jpg",
    title: "lipstick",
    description:
      "Universal lipstick with a customised shade of pink and a subtle radiant effect. Ideal for: enhancing the natural colour of your lips with a natural and tailored finish that will make your smile pop. Suited to all skin tones.",
    price: 234,
    id: 1,
  },

  {
    title: "Lipstick",
    description:
      ' "Universal lipstick with a customised shade of pink and a subtle radiant effect. Ideal for: enhancing the natural colour of your lips with a natural and tailored finish that will make your smile pop. Suited to all skin tones',
    price: 3445,
    image:
      "https://i.pinimg.com/736x/bb/3e/93/bb3e93da03b4b01718e6e59ddfac3350.jpg",
  },

  {
    title: "Blush",
    image:
      "https://i.pinimg.com/474x/91/c0/f4/91c0f4888dcd3aa242b27654436291d3.jpg",
    description:
      "Gel blush with a luminous and pearly finish. Dermatologically tested, non-comedogenic. The complexion is enveloped in a silky veil of dewy colour that leaves the skin feeling wonderfully fresh. The cheekbones are enhanced by an eye-catching sculpted effect.",
    price: 123,
    id: 2,
  },
];
const Home = () => {
  return (
    <div>
      <center>
        <h1>KIKO COSMETICS</h1>
        <div className="d-flex justify-content-between container mt-5">
          {cosmetics.map((item) => (
            <CardBlock key={item.id} item={item} />
          ))}
        </div>
      </center>
    </div>
  );
};

export default Home;
