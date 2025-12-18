
type SleeveType = "short" | "long" | "sleeveless";
type CollarType = "round" | "vneck" | "collar";

export type Dress = {
    id: number;
    name: string;
    type: "tshirt" | "dress" | "hoodie" | "tank";
    defaultColor: string;
    sleeves: SleeveType[];
    collars?: CollarType[]
};

export const dresses: Dress[] = [

    {
        id: 1,
        name: "Classic T-Shirt",
        type: "tshirt",
        defaultColor: "#3b82f6",
        sleeves: ["short", "long", "sleeveless"],
        collars: ["round", "vneck"],
    },

    {
    id: 2,
    name: "Summer Dress",
    type: "dress",
    defaultColor: "#ec4899",
    sleeves: ["short", "long", "sleeveless"],
  },

  {
    id: 3,
    name: "Casual Hoodie",
    type: "hoodie",
    defaultColor: "#8b5cf6",
    sleeves: ["long"],
  },
  {
    id: 4,
    name: "Tank Top",
    type: "tank",
    defaultColor: "#10b981",
    sleeves: ["sleeveless"],
  },


];