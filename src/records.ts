import { nanoid } from "nanoid";

import { IRecord } from "src/redux/reducers/inventory";

// Let's say this is returned from an API
export const records: IRecord[] = [
  {
    recordId: nanoid(),
    name: "The Chronic",
    artist: "Dr Dre",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "2xLP",
    picture:
      "https://img.discogs.com/mpWCoWoUh2sBD0ikn7G8Vd-GsfU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-226082-1239894271.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "The Unseen",
    artist: "Quasimoto",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "2xLP",
    picture:
      "https://img.discogs.com/RsPkDEyp5PlH4brZbIyDlK6PrB4=/fit-in/600x611/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1671758-1328820485.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Madvillainy",
    artist: "Madvillain",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "2xLP",
    picture:
      "https://img.discogs.com/rU_Fvcm_ippMVC2i6irdoIykKjo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-242785-1403277327-2810.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Songs Of Experience",
    artist: "David Axelrod",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/XpXz1D4A3ChmcwBOohM4uWx5Uxg=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14878373-1583339448-1084.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Song Of Innocence",
    artist: "David Axelrod",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/oFM3l0HkEe1g88ZJi5W8zYEiq9E=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1992378-1264442248.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Messiah",
    artist: "David Axelrod",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/Bc3l5CbbJ9VgtWNWiVWwohnkMk4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-387924-1159652247.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Illmatic",
    artist: "Nas",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/z_2ZaMM6SeRNIJc210m3v8wnWb0=/fit-in/500x490/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-392604-1177019228.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Fantastic Vol. 2",
    artist: "Slum Village",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "3xLP",
    picture:
      "https://img.discogs.com/nGkLAMemBczyoy7CcRwLWp-AviY=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-351045-1346271283-8593.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Gentle Giant",
    artist: "Gentle Giant",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/JoBXRYDaCyF83-Aq6cGScd98sTw=/fit-in/600x608/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1048171-1456393209-1045.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Earth Rot",
    artist: "David Axelrod",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/Vy7YoP7n2H6A5lUvDTCFqbXYLCI=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-679324-1341903623-6518.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Aqualung",
    artist: "Jethro Tull",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "LP",
    picture:
      "https://img.discogs.com/tnEqmcyhhKwA-JaGUFXWDuzu1Vg=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-708318-1586624955-5477.jpeg.jpg",
  },
  {
    recordId: nanoid(),
    name: "Operation: Doomsday",
    artist: "MF DOOM",
    priceAmount: 12.0,
    priceCurrency: "CA$",
    format: "3xLP",
    picture:
      "https://img.discogs.com/9QZgA_wr9Bj6OURgUTo4lz38K8g=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-213193-1521377544-8437.jpeg.jpg",
  },
];
