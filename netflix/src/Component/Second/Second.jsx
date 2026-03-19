import "./Second.css";
import Card from "../Card/Card";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import { FaTv } from "react-icons/fa";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

const Second = () => {
  const movies = [
    { image: "image3.webp" },
    { image: "rip.webp" },
    { image: "ani.webp" },
    { image: "bri.webp" },
    { image: "herd.webp" },
  ];

  const tv = [
    {
      id: 1,
      title: "Enjoy on your TV",
      body: "  Watch on Smart TVs,Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: <FaTv color="#6e2484" fontSize={60} />,
    },
    {
      id: 2,
      title: "Download your shows to watch offline",
      body: "Save your favorites easily and always have something to watch.",
      icon: <BsFillArrowDownRightCircleFill color="#6e2484" fontSize={60} />,
    },
    {
      id: 3,
      title: "Watch everywhere",
      body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <BsRocketTakeoffFill color="#6e2484" fontSize={60} />,
    },
    {
      id: 4,
      title: "Create profiles for kids",
      body: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: <RiProfileLine color="#6e2484" fontSize={60} />,
    },
  ];

  const card = [
    {
      id: 1,
      title: "What is Netflix?",
      icon: <FaPlus color="white" fontSize={50} />,
    },
    {
      id: 2,
      title: "How much does Netflix Cost?",
      icon: <FaPlus color="white" fontSize={50} />,
    },
    {
      id: 3,
      title: "Where can i watch Netflix?.",
      icon: <FaPlus color="white" fontSize={50} />,
    },
    {
      id: 4,
      title: "How do i cancel?.",
      icon: <FaPlus color="white" fontSize={50} />,
    },

    {
      id: 5,
      title: "What can i watch on Netflix?.",
      icon: <FaPlus color="white" fontSize={50} />,
    },

    {
      id: 6,
      title: "is Netflix good for Kids?.",
      icon: <FaPlus color="white" fontSize={50} />,
    },
  ];

  return (
    <>
      <div className="second">
        <div className="second-wrapper">
          <h1 className="second-h1">Trending Now</h1>
          <div className="movies">
            {movies.map((i, idx) => (
              <Card image={i.image} key={idx} />
            ))}
          </div>
          <h1 className="second-card1-h1">More Reasons to Join</h1>

          <div className="second-card1">
            {tv.map((i, idx) => (
              <Card1 title={i.title} key={idx} icon={i.icon} body={i.body} />
            ))}
          </div>
          <h1 className="second-card2-h1">Frequently Asked Questions</h1>
          <div className="second-card2">
            {card.map((i, idx) => (
              <Card2 title={i.title} key={idx} icon={i.icon} />
            ))}
          </div>
          
         <div className="header-body1">
        <p className="header-p">
    Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="header-input">
          <input className="header-email" placeholder="Email address" />
          <button className="header-btn2">Get Started </button>
        </div>
      </div>

     
          </div>
        </div>
        
      
    </>
  );
};

export default Second;
