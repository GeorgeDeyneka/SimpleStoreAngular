export interface Product {
  id: number;
  name: string;
  price: {
  actually: number;
  old?: number;
},
  productType: string;
  description: string;
  vendorCode: number;
  raiting: number;
  commentCount: number;
  available: number;
  imgUrl: {
    one: string;
    two?: string;
    three?: string;
  }
}

export const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: {
      actually: 1199,
    },
    productType: "Phone",
    description:
      "iPhone 13 Pro Max объединяет мощную систему камер, самый быстрый чип для iPhone A15 Bioniс, емкую батарею с увеличенным рабочим ресурсом, надежную систему безопасности, потрясающий дисплей с частотой обновления до 120 Гц. И все это заключено в прочном корпусе с защитой по стандарту IP68.",
    vendorCode: 673890,
    raiting: 4.8,
    commentCount: 16,
    available: 6,
    imgUrl: {
      one: "../../assets/images/13ProMax.jpeg",
      two: "../../assets/images/13ProMaxGold.jpg",
      three: "../../assets/images/13ProMaxBlue.jpeg",
    },
  },
  {
    id: 2,
    name: "iPhone 13 Mini",
    price: {
      actually: 699,
      old: 799,
    },
    productType: "Phone",
    description:
      "Оцените самую продвинутую систему из двух камер 12 Мп, суперспособности чипа A15 Bionic, возросшую автономность аккумулятора и новый взгляд на прочность и вопросы личной безопасности. Встречайте новый iPhone mini.",
    vendorCode: 673870,
    raiting: 4.7,
    commentCount: 18,
    available: 9,
    imgUrl: {
      one: "../../assets/images/13Mini.jpeg",
    },
  },
  {
    id: 3,
    name: "iPhone SE",
    price: {
      actually: 499,
    },
    productType: "Phone",
    description:
      "iPhone SE 3 2022 года получил довольно современную внутреннюю поддержку благодаря новому чипсету Apple A15 и модему для подключения 5G. В дизайне он немного освежающе ретро, с тем же 4,7 дисплеем, с рамками, кнопкой «Домой» Touch ID и в алюминиевом корпусе. Благодаря невероятной защите IPX67 смартфон защищен от попадания влаги и, конечно же, пыли.",
    vendorCode: 673865,
    raiting: 4.2,
    commentCount: 15,
    available: 27,
    imgUrl: {
      one: "../../assets/images/SE2022.jpeg",
    },
  },
  {
    id: 4,
    name: "MacBook Pro '14",
    price: {
      actually: 1999,
      old: 2199,
    },
    productType: "Laptop",
    description:
      "Новый MacBook Pro с беспрецедентной производительностью открывает невероятные возможности профессионалам.",
    vendorCode: 673581,
    raiting: 4.5,
    commentCount: 28,
    available: 21,
    imgUrl: {
      one: "../../assets/images/MacBookProFrontView.jpeg",
      two: "../../assets/images/MacBookProOverView.jpeg",
      three: "../../assets/images/MacBookProDuo.jpeg",
    },
  },
  {
    id: 5,
    name: "iPad Pro",
    price: {
      actually: 1299,
    },
    productType: "Tablet",
    description:
      "Все в самом совершенном виде. Невероятная производительность чипа M1, бесподобный дисплей XDR и сверхбыстрая беспроводная связь. Полный вперед.",
    vendorCode: 673524,
    raiting: 4.7,
    commentCount: 35,
    available: 12,
    imgUrl: {
      one: "../../assets/images/iPadPro.jpeg",
    }
  },
];