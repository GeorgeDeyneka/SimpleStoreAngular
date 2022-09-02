export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

export const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 1199,
    description:
      "iPhone 13 Pro Max объединяет мощную систему камер, самый быстрый чип для iPhone A15 Bioniс, емкую батарею с увеличенным рабочим ресурсом, надежную систему безопасности, потрясающий дисплей с частотой обновления до 120 Гц. И все это заключено в прочном корпусе с защитой по стандарту IP68.",
    imgUrl: "../../assets/images/13ProMax.jpeg",
  },
  {
    id: 2,
    name: "iPhone 13 Mini",
    price: 699,
    description:
      "Оцените самую продвинутую систему из двух камер 12 Мп, суперспособности чипа A15 Bionic, возросшую автономность аккумулятора и новый взгляд на прочность и вопросы личной безопасности. Встречайте новый iPhone mini.",
    imgUrl: "../../assets/images/13Mini.jpeg",
  },
  {
    id: 3,
    name: "iPhone SE",
    price: 499,
    description:
      "iPhone SE 3 2022 года получил довольно современную внутреннюю поддержку благодаря новому чипсету Apple A15 и модему для подключения 5G. В дизайне он немного освежающе ретро, с тем же 4,7 дисплеем, с рамками, кнопкой «Домой» Touch ID и в алюминиевом корпусе. Благодаря невероятной защите IPX67 смартфон защищен от попадания влаги и, конечно же, пыли.",
    imgUrl: "../../assets/images/SE2022.jpeg",
  },
  {
    id: 4,
    name: "MacBook Pro '14",
    price: 2199,
    description:
      "Новый MacBook Pro с беспрецедентной производительностью открывает невероятные возможности профессионалам.",
    imgUrl: "../../assets/images/MacBookPro2021.webp",
  },
  {
    id: 5,
    name: "iPad Pro",
    price: 1299,
    description:
      "Все в самом совершенном виде. Невероятная производительность чипа M1, бесподобный дисплей XDR и сверхбыстрая беспроводная связь. Полный вперед.",
    imgUrl: "../../assets/images/iPadPro.jpeg",
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
