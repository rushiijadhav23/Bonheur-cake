import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Cake from "../assets/Hero-Cake.png"
import gsap from 'gsap';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
   gsap.set(".left-text",{x:"-100vw",opacity:0});
   gsap.set(".img-container",{x:"100vw",opacity:0});
   gsap.set(".content",{y:"100vw",opacity:0});

   gsap.to(".left-text",{
    x:0,
    opacity:1,
    duration:1.5,
    ease:"power2.out",
   })
   gsap.to(".img-container",{
    x:0,
    opacity:1,
    duration:1.5,
    ease:"power2.out",
   })
   gsap.to(".content",{
    y:0,
    opacity:1,
    duration:1.5,
    ease:"power2.out",
   })
  }, [])
  

  return (
    <div className="w-full min-h-screen relative bg-[#fff5f7 -z-20]">
      <div className="max-w-7xl mx-auto pt-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 left-text">
            <h1 className="text-4xl md:text-5xl font-bold text-[#9e2156] leading-tight">
              THE MOST<br />
              DELICIOUS CAKES
            </h1>
            <p className="text-xl text-gray-600">
              in Pune
            </p>
            <p className="text-gray-600">
              If you love healthy eating but can&apos;t resist your weakness for cakes - our cakes are for you!
            </p>
            <button 
              onClick={() => navigate('/menu')}
              className="bg-[#9e2156] text-white px-8 py-3 rounded-full hover:bg-[#7d1a44] transition-colors"
            >
              View Menu
            </button>
          </div>
          
          <div className="h-1/2 flex flex-col justify-center items-end img-container">
            <img 
              src={Cake}
              alt="Delicious Cake"
              className="w-3/4"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 content">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9e2156">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="text-gray-600">Perfect for a healthy diet</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9e2156">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-gray-600">Low-calorie and healthy</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9e2156">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">No dairy fat</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 -z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L10,96C20,96,40,96,60,80C80,64,100,32,120,48C140,64,160,128,180,160C200,192,220,192,240,176C260,160,280,128,300,122.7C320,117,340,139,360,165.3C380,192,400,224,420,234.7C440,245,460,235,480,224C500,213,520,203,540,197.3C560,192,580,192,600,176C620,160,640,128,660,96C680,64,700,32,720,32C740,32,760,64,780,69.3C800,75,820,53,840,48C860,43,880,53,900,90.7C920,128,940,192,960,224C980,256,1000,256,1020,250.7C1040,245,1060,235,1080,213.3C1100,192,1120,160,1140,128C1160,96,1180,64,1200,58.7C1220,53,1240,75,1260,117.3C1280,160,1300,224,1320,218.7C1340,213,1360,139,1380,101.3C1400,64,1420,64,1430,64L1440,64L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;