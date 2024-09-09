import React, { useState, useEffect } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaPython, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHtml, MdOutlineCss } from 'react-icons/md';
import { SiFlask } from 'react-icons/si';

const Technologies = () => {
  // Array of texts to display
  const texts = ['Amazon Web Services', 'IBM Watsonx', 'Azure OpenAI'];

  // State to hold the current text
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setIsAnimating(true); // Start animation

      setTimeout(() => {
        // Change the text after animation starts
        setCurrentText((prevText) => {
          const currentIndex = texts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setIsAnimating(false); // End animation
      }, 500); // Matches the animation duration (0.5s)
    }, 3000); // Change text every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(textChangeInterval);
  }, [texts]);

  // Inline CSS for sliding animation
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      height: '100px',
      overflow: 'hidden',
    },
    text: {
      
      fontSize: '1.5rem',
      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
      transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
      opacity: isAnimating ? 0 : 1,
    },
  };

  // Icons array
  const icons = [
    <RiReactjsLine className="text-blue-400 text-6xl" />,
    <FaPython className="text-yellow-400 text-6xl" />,
    <FaJava className="text-red-400 text-6xl" />,
    <IoLogoJavascript className="text-yellow-400 text-6xl" />,
    <MdHtml className="text-orange-400 text-6xl" />,
    <MdOutlineCss className="text-blue-400 text-6xl" />,
    <SiFlask className="text-gray-400 text-6xl" />,
  ];

  return (
    <div>
      <h2 className="py-7 font-thick text-center text-white text-3xl">Technologies</h2>

      <div className="flex flex-wrap rounded-l items-center justify-center gap-4 pb-7">
        {icons.map((icon, index) => (
          <div key={index} className=" hover:opacity-50 transition-opacity duration-300 rounded-xl border-2 border-neutral-400 p-4">
            {icon}
          </div>
        ))}
      </div>

      
      <div style={styles.container} className="text-white">
        <p className='text-2xl font-thick p-4'>Developed AI Apps using cutting-edge tools on </p>
        <div className='text-white font-thin' style={styles.text}>{currentText}</div>
      </div>
    </div>
  );
};

export default Technologies;
