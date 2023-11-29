import './Media/Headshot.jpg';
import NavBar from "../Components/navBar";

const Home = () => {
    return (
    <>
    <section className="Home">
        <header>
            <NavBar/>
        </header>
        <section className="introdcution">
            <img className="HeadShot" src='HeadShot.jpg' alt="HeadShot"/>
            <h3>Hello and Welcome to my portfolio!</h3>
            <p>My name is Roggero Spezialy and this portfolio is made to help showcase the skills as well as the abilities I have learned while going through a coding bootcamp via SprinBoard or through self research on various platforms.</p>
            <p>While I did go through the Front-End Software Development course, my end goal is to create apps and video games. I love the idea of creating something that helps people in various of ways and a good way is through video games.</p>
        </section>
    </section>
    </>
  );
}

export default Home;