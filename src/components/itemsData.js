const allItems = [
    {
      name: "Strapless assemetrical dress with white accent",
      price: "₹799",
      img: "https://i.ibb.co/DDzkvKdS/d2.jpg",
    },
    {
      name: "Floral halterneck blue dress",
      price: "₹699",
      img: "https://i.ibb.co/39bXLRBB/d3.jpg",
    },
    {
      name: "Halterneck mini dress",
      price: "₹1199",
      img: "https://i.ibb.co/dsWJgCr9/d1.jpg",
    },
    {
      name: "Denim Skater Dress",
      price: "₹849",
      img: "https://i.ibb.co/CpyXpCbV/8c24e9d0-be33-4677-975c-a05f78264b38.png",
    },
    {
      name: "Black tube dress with white lace accent",
      price: "₹749",
      img: "https://i.ibb.co/Yz9gSjH/d5.jpg",
    },
    {
      name: "Green Gingham Babydoll",
      price: "₹499",
      img: "https://i.ibb.co/s9Tm5zjL/t5.jpg",
    },
    {
      name: "Black Lacy Top",
      price: "₹399",
      img: "https://i.ibb.co/dJgk1z7x/t1.jpg",
    },
    {
      name: "Red Halter Neck Top",
      price: "₹549",
      img: "https://i.ibb.co/spGmzrWV/t3.jpg",
    },
    {
      name: "White Cat Tee",
      price: "₹599",
      img: "https://i.ibb.co/rVrXB1k/t2.jpg",
    },
    {
      name: "Black Vest with Bows",
      price: "₹349",
      img: "https://i.ibb.co/cXQcgL99/t4.jpg",
    },
    {
      name: "High Waist Jeans",
      price: "₹999",
      img: "https://i.ibb.co/r2wjbgk1/b1.jpg",
    },
    {
      name: "Black pinstripe mini skirt",
      price: "₹899",
      img: "https://i.ibb.co/jPxgSxjV/b2.jpg",
    },
    {
      name: "Black pinstripe mini skirt",
      price: "₹799",
      img: "https://i.ibb.co/jPxgSxjV/b2.jpg",
    },
    {
      name: "Highrise lightwash jeans with bows",
      price: "₹599",
      img: "https://i.ibb.co/VpcvS7fv/b7.jpg",
    },
    {
      name: "Wideleg high rise darkwash jeans",
      price: "₹649",
      img: "https://i.ibb.co/xt5GP7s5/b4.jpg",
    },
    {
      name: "Statement Necklace",
      price: "₹299",
      img: "https://i.ibb.co/d4hw28MD/a1.jpg",
    },
    {
      name: "Antique silver boho waist belt",
      price: "₹399",
      img: "https://i.ibb.co/zT7tjnkX/a2.jpg",
    },
    {
      name: "Amethyst drop earrings",
      price: "₹249",
      img: "https://i.ibb.co/HLv48TmM/a3.jpg",
    },
    {
      name: "Antique silver bracelet",
      price: "₹149",
      img: "https://i.ibb.co/ychbQCHW/a4.jpg",
    },
    {
      name: "Vintage denim hat",
      price: "₹199",
      img: "https://i.ibb.co/bg1sGQS4/a5.jpg",
    },
    {
    name: "Red Ballet Flats",
    price: "₹999",
    img: "https://i.ibb.co/4gR66Ywr/f4.jpg",
    },
    {
      name: "Adidas Cream Shoes",
      price: "₹899",
      img: "https://i.ibb.co/PzfyNRX9/f5.jpg",
    },
    {
      name: "High-Top Converse",
      price: "₹799",
      img: "https://i.ibb.co/twJX7jd0/f3.jpg",
    },
    {
      name: "Brown wedged heels",
      price: "₹699",
      img: "https://i.ibb.co/4ZSh7VTN/f2.jpg",
    },
    {
      name: "Cherry Red Heels",
      price: "₹849",
      img: "https://i.ibb.co/Xfx8QLqY/f1.jpg",
    },
    {
      name: "Supreme metallic plaid short sleeved shirt",
      price: "₹499",
      img: "https://i.ibb.co/hxpbddqp/Whats-App-Image-2025-04-06-at-3-04-09-PM-3.jpg",
    },
    {
      name: "Striped beige short sleeve button down shirt",
      price: "₹449",
      img: "https://i.ibb.co/tp4N6Hm2/Whats-App-Image-2025-04-06-at-3-04-09-PM-2.jpg",
    },
    {
      name: "Brown short sleeved linen shirt",
      price: "₹599",
      img: "https://i.ibb.co/mVQcW87k/Whats-App-Image-2025-04-06-at-3-04-10-PM.jpg",
    },
    {
      name: "Green high sleeved shirt",
      price: "₹529",
      img: "https://i.ibb.co/PvzKhcyV/shopping.png",
    },
    {
      name: "Vintage autoboy tee",
      price: "₹699",
      img: "https://i.ibb.co/237zKb86/Whats-App-Image-2025-04-06-at-3-04-09-PM-1.jpg",
    },
    {
      name: "Men graphic tee vintage racing",
      price: "₹569",
      img: "https://i.ibb.co/Y7WStW5v/Whats-App-Image-2025-04-06-at-3-04-08-PM-2.jpg",
    },
    {
      name: "Oversized men graphic tee",
      price: "₹945",
      img: "https://i.ibb.co/Cp0vh1L8/Whats-App-Image-2025-04-06-at-3-04-09-PM.jpg",
    },
    {
      name: "White and navy blue tshirt for men",
      price: "₹769",
      img: "https://i.ibb.co/p6kXXJZZ/Whats-App-Image-2025-04-06-at-3-04-08-PM-1.jpg",
    },
    {
      name: "Retro loose wide legged jorts",
      price: "₹569",
      img: "https://i.ibb.co/Qjm0K74b/Whats-App-Image-2025-04-06-at-3-04-12-PM.jpg",
    },
    {
      name: "Baggy jinco dragon cargo shorts",
      price: "₹479",
      img: "https://i.ibb.co/HLSZDR9R/Whats-App-Image-2025-04-06-at-3-04-11-PM-1.jpg",
    },
    {
      name: "Light washed wide legged demin jeans",
      price: "₹529",
      img: "https://i.ibb.co/TBVRyrkx/Whats-App-Image-2025-04-06-at-3-04-11-PM-2.jpg",
    },
    {
      name: "Wide legged ripped black jeans",
      price: "₹799",
      img: "https://i.ibb.co/HT7LBxXy/Whats-App-Image-2025-04-06-at-3-04-10-PM-2.jpg",
    },
    {
      name: "Nike navy track pants",
      price: "₹999",
      img: "https://i.ibb.co/sJDDjpFv/Whats-App-Image-2025-04-06-at-3-04-11-PM.jpg",
    },
    {
      name: "G shock casio vintage watch",
      price: "₹249",
      img: "https://i.ibb.co/RG2vLv3g/Whats-App-Image-2025-04-06-at-3-04-06-PM-1.jpg",
    },
    {
      name: "Collection of 4 vintage men's rings",
      price: "₹359",
      img: "https://i.ibb.co/Gfb1mY8Q/Whats-App-Image-2025-04-06-at-3-04-06-PM.jpg",
    },
    {
      name: "Wabi Sabi sunglasses",
      price: "₹199",
      img: "https://i.ibb.co/gF7QTPxj/Whats-App-Image-2025-04-06-at-3-04-05-PM-5.jpg",
    },
    {
      name: "Men Casual brown belt",
      price: "₹229",
      img: "https://i.ibb.co/qYwcj2SY/Whats-App-Image-2025-04-06-at-3-04-04-PM.jpg",
    },
    {
      name: "Vintage distressed grey denim hat",
      price: "₹179",
      img: "https://i.ibb.co/LhJ4Jb1x/Whats-App-Image-2025-04-06-at-3-04-04-PM-1.jpg",
    },
    {
      name: "Jacques brown loafers for men",
      price: "₹689",
      img: "https://i.ibb.co/xqt2BwkB/Whats-App-Image-2025-04-06-at-3-04-08-PM.jpg",
    },
    {
      name: "Puma speedcat- men",
      price: "₹999",
      img: "https://i.ibb.co/GvLhBcKy/Whats-App-Image-2025-04-06-at-3-04-07-PM-2.jpg",
    },
    {
      name: "Ray Tracer Tr 2- men",
      price: "₹699",
      img: "https://i.ibb.co/Gfhrw36C/Whats-App-Image-2025-04-06-at-3-04-07-PM-1.jpg",
    },
    {
      name: "New balance 2002R in phantom",
      price: "₹799",
      img: "https://i.ibb.co/x8Ls3shg/Whats-App-Image-2025-04-06-at-3-04-07-PM.jpg",
    },
    {
      name: "Arvi hakiki penny loafers",
      price: "₹769",
      img: "https://i.ibb.co/4ZFw3bfv/Whats-App-Image-2025-04-06-at-3-04-06-PM-3.jpg",
    }
];


export default allItems;
