import TShirt from "./TShirt";
import Dress from "./Dress";
import Hoodie from "./Hoodie";
import Tank from "./Tank";

type Props = {
  type: string;
  color?: string;
  sleeve?: "short" | "long" | "sleeveless";
};

export default function DressRenderer({ type, color, sleeve }: Props) {
  switch (type) {
    case "tshirt":
      return <TShirt color={color} sleeve={sleeve} />;
    case "dress":
      return <Dress color={color} sleeve={sleeve} />;
    case "hoodie":
      return <Hoodie color={color} />;
    case "tank":
      return <Tank color={color} />;
    default:
      return null;
  }
}
