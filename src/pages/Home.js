import "../assets/styles/home.css";
import Video from "../assets/videos/church.mp4";


const Home = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Christian Church</h1>
        <p>Growing in Faith, Living in Grace.</p>
        <a href="/visit" className="cta-button">
          Join Us
        </a>
      </div>
    </div>
  );
};

export default Home;