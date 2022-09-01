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
    description: "A large phone with one of the best screens",
    imgUrl: "../../assets/images/13ProMax.jpeg",
  },
  {
    id: 2,
    name: "iPhone 13 Mini",
    price: 699,
    description: "A great phone with one of the best cameras",
    imgUrl: "../../assets/images/13Mini.jpeg",
  },
  {
    id: 3,
    name: "iPhone SE",
    price: 499,
    description: "",
    imgUrl: "../../assets/images/SE2022.jpeg",
  },
  {
    id: 4,
    name: "MacBook Pro '14",
    price: 2199,
    description: "A great laptop with one of the best processor M1 Pro",
    imgUrl: "../../assets/images/MacBookPro14.jpeg",
  },
  {
    id: 5,
    name: "iPad Pro",
    price: 1299,
    description: "The greatest tool for paiters and designers",
    imgUrl: "../../assets/images/iPadPro.jpeg",
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
