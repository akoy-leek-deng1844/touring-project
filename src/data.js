import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:1, href:'#about', text:'about'},
    {id:1, href:'#services', text:'services'},
    {id:1, href:'#tours', text:'tours'}
]
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"},
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-squarespace"},
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-twitter"},
];
export const services = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    cost: 2100,
    location: "China",
    duration: 6,
    date: "august 26th, 2020",
    img: tour1,
  },
  {
    id: 2,
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    cost: 1400,
    location: "indonesia",
    duration: 11,
    date: "april 11th, 2020",
    img: tour2,
  },
  {
    id: 3,
    title: "Explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    cost: 5000,
    location: "hong kong",
    duration: 8,
    date: "september 15th, 2020",
    img: tour3,
  },
  {
    id: 4,
    title: "Kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    cost: 3300,
    location: "Kenya",
    duration: 20,
    date: "august 12th, 2018",
    img: tour4
  },
];