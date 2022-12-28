//Testimonial Data
const testimonials = [
  {
    image: "/Images/1.jpeg",
    name: "JOHN",
    rating:
      "<i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i>",
    job: "<i class='fa fa-quote-left' style='font-size: 30px; color: red'></i>",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium tenetur, ipsam libero ipsa voluptatibus sapiente neque pariatur est eius. Voluptatibus ea dolorum eius veniam dicta similique provident repellat unde!",
  },
  {
    image: "/Images/2.jpeg",
    name: "WANDA",
    rating:
      "<i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i>",
    job: "<i class='fa fa-quote-left' style='font-size: 30px; color: red'></i>",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium tenetur, ipsam libero ipsa voluptatibus sapiente neque pariatur est eius. Voluptatibus ea dolorum eius veniam dicta similique provident repellat unde!",
  },
  {
    image: "/Images/3.jpg",
    name: "ALEX",
    rating:
      "<i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i>",
    job: "<i class='fa fa-quote-left' style='font-size: 30px; color: red'></i>",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium tenetur, ipsam libero ipsa voluptatibus sapiente neque pariatur est eius. Voluptatibus ea dolorum eius veniam dicta similique provident repellat unde!",
  },
  {
    image: "/Images/4.jpeg",
    name: "MIC",
    rating:
      " <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i>",
    job: "<i class='fa fa-quote-left' style='font-size: 30px; color: red'></i>",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium tenetur, ipsam libero ipsa voluptatibus sapiente neque pariatur est eius. Voluptatibus ea dolorum eius veniam dicta similique provident repellat unde!",
  },
  {
    image: "/Images/5.jpeg",
    name: "MESSI",
    rating:
      "<i class='fa fa-star' style='font-size: 20px; color: red'></i><i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i> <i class='fa fa-star' style='font-size: 20px; color: red'></i>",
    job: "<i class='fa fa-quote-left' style='font-size: 30px; color: red'></i>",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium tenetur, ipsam libero ipsa voluptatibus sapiente neque pariatur est eius. Voluptatibus ea dolorum eius veniam dicta similique provident repellat unde!",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Left Button Handler
function left() {
  i = (j + i - 1) % j;
  display();
}

// Right Button Handler
function right() {
  i = (j + i + 1) % j;
  display();
}

// Display Carousel Data
let display = () => {
  testimonialContainer.innerHTML = `
  <img class='carousel__imgDiv' src=${testimonials[i].image}>
  <h3>${testimonials[i].name}</h3>
  <p>${testimonials[i].rating}</p>
  <p>${testimonials[i].testimonial}</p>
  <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = display;
