import React,{useEffect} from 'react'
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';

function AboutUs() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}, []);
  return (
    <>
      <Navbar/>
      <div className='position-relative head-frist-section'>
                <img className='z-1 w-100 pt-5 pb-5 OurClasses-home-img'  src="pager-bg.png" alt="bg-img" />
                <div className=' text-warning position-absolute OurClasses-home-bg-text'>School</div>
                <div className='overlay z-4 ' style={{ backgroundColor: "#0f74ed", height: '100%', position: 'absolute', top: '0%', left: '0%', width: '100%', opacity: '15%' }}>

                </div>
                <div className='position-absolute opacity-100 text-center OurClasses-home-title-text' style={{ fontWeight: "600" }}>
                    <h1 >Abouts</h1>
                    <div>
                        <NavLink to='/' className='text-decoration-none'> Home </NavLink> | <span> Abouts </span>
                    </div>
                </div>
            </div >
      <div className='AboutUs-Main-Section'>
        <div className='container'>

          <div className='AboutUs-headings'>
            <span className='Aboutus-head'><h6>About Us</h6></span>
            <span className='HorizontalLine'></span>
          </div>

          <div className='About-Content '>
            <div className='about-txt-p'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero. Aliquid in beatae vel, reprehenderit cum laboriosam incidunt fuga consequuntur, corporis aperiam eaque totam blanditiis rerum rem! Ad tempore, placeat delectus vero veritatis nostrum dolore praesentium sit, eum, quaerat maiores!</p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident, reiciendis cumque suscipit sunt ad saepe modi libero a quis exercitationem quisquam aspernatur at expedita corporis aut architecto incidunt quod ex earum ullam? Consequatur cupiditate nobis facere expedita accusantium quae mollitia doloribus praesentium aliquid rerum, ut quas saepe nam adipisci.</p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident, reiciendis cumque suscipit sunt ad saepe modi libero a quis exercitationem quisquam aspernatur at expedita corporis aut architecto incidunt quod ex earum ullam? Consequatur cupiditate nobis facere expedita accusantium quae mollitia doloribus praesentium aliquid rerum, ut quas saepe nam adipisci.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero. Aliquid in beatae vel, reprehenderit cum laboriosam incidunt fuga consequuntur, corporis aperiam eaque totam blanditiis rerum rem! Ad tempore, placeat delectus vero veritatis nostrum dolore praesentium sit, eum, quaerat maiores!</p>
            </div>
          </div>
          <div className='Ques-section'>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item" >
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Our Philosophy
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>"Our Philosophy:</strong> At our school, we are dedicated to nurturing young minds and fostering a love for learning. We believe in creating a supportive and inclusive environment where every student feels valued and empowered to reach their full potential. Our philosophy centers around personalized education, embracing diversity, and promoting critical thinking skills. Through a holistic approach to education, we aim to cultivate well-rounded individuals who are not only academically proficient but also socially and emotionally resilient. With a focus on collaboration, creativity, and community, we strive to inspire a lifelong passion for learning and a commitment to making a positive difference in the world."
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Our Culture
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>"Our Culture:</strong> At our school, we embrace a vibrant and nurturing culture that celebrates diversity, fosters creativity, and promotes respect for one another. Our community is built upon a foundation of mutual support, where students, teachers, and staff come together to create a welcoming and inclusive environment. With a commitment to excellence and a passion for innovation, we encourage curiosity and exploration, empowering students to discover their interests and talents. Through meaningful relationships and collaborative learning experiences, we strive to instill values of kindness, integrity, and responsibility in our students. Together, we cultivate a culture of belonging and belonging, where every individual is valued, respected, and inspired to achieve their dreams."
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Definition of High Quality Learning
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>"Definition of High Quality Learning:</strong> At our school, we define high-quality learning as a dynamic and engaging process that goes beyond mere acquisition of knowledge. It encompasses deep understanding, critical thinking, and real-world application of concepts. High-quality learning involves active participation, where students are encouraged to question, analyze, and explore new ideas. It emphasizes mastery of both academic content and essential skills such as communication, collaboration, and problem-solving. In our pursuit of excellence, we prioritize personalized instruction, differentiated learning experiences, and ongoing assessment to meet the diverse needs of our students. Through a combination of rigorous academics, meaningful experiences, and supportive guidance, we aim to empower learners to become confident, compassionate, and lifelong seekers of knowledge."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >


    </>
  )
}

export default AboutUs;