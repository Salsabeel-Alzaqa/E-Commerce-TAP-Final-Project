import handbagHero from "../images/handbagHero.png";
import zaraImage from '../images/Zara_Logo 1.png';
import handmImage from '../images/H&M-Logo 1.png';
import dandgImage from '../images/Dolce_&_Gabbana 1.png';
import chanelImage from '../images/Chanel_logo_interlocking_cs 1.png';
import pradaImage from '../images/Prada-Logo 1.png';
import bibaImage from '../images/logo 1.png';

export const mockData = [
  { name: "bag", image: "../..", price: 10 },
  { name: "bag", image: "../..", price: 10 },
];
export const MockShopByBrand =
  [
    { 'brandImage': zaraImage, 'brandName': 'zara' },
    { 'brandImage': dandgImage, 'brandName': 'dandg' },
    { 'brandImage': handmImage, 'brandName': 'h&m' },
    { 'brandImage': chanelImage, 'brandName': 'chanel' },
    { 'brandImage': pradaImage, 'brandName': 'prada' },
    { 'brandImage': bibaImage, 'brandName': 'biba' }
  ];
export const heroItems = [
    {
        category: "handbags",
        image: handbagHero,
        title: "Carry your Funk",
        subtitle: "Trendy handbags collection for your party animal"
    },
    {
        category: "watches",
        image:handbagHero,
        title: "Carry your Funk",
        subtitle: "Trendy watches collection for your party animal",
    },
    {
        category: "skincare",
        image: handbagHero,
        title: "Carry your Funk",
        subtitle: "Trendy skincare collection for your party animal"
    },
    {
        category: "jewellery",
        image:handbagHero,
        title:"Carry your Funk",
        subtitle: "Trendy jewellery collection for your party animal"
    },
    {
        category: "Apparels",
        image: handbagHero,
        title: "Carry your Funk",
        subtitle: "Trendy Apparels collection for your party animal"
    }
];
