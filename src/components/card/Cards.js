import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Cards = ({ colors }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {colors &&
          colors.map((color, index) => <Card color={color} key={index} />)}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Cards;
