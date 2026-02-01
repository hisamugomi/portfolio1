import Image from "./app/public/Portfolioimage1-D4lplkW8.jpg";
import "./globals.css"

export default function Home() {
  return (
    <div className="flex flex-col content-start">
      <div className="flex items-center justify-center h-px-500 pt-16 pb-14  ">
        <img src="./app/public/Portfolioimage1-D4lplkW8.jpg" alt="" />
        <div className=" m-8 p-8 bg-gray-40 shadow-lg rounded-lg flex flex-col justify-center align-center">
          <strong className=" p-1 font-stretch-90% flex-1 z-20 ">Hello, I am Hisamu Gomi, </strong>
          <div className="flex-2, z-20">An aspiring developer wanting to make the world a better place with code </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-px-500 pt-16 pb-14  ">
        <p>Graduated from the University of Lethbridge with a B.S.c. Psychology</p>
        <p>Currently working in tech, working on a Machine Learning project</p>
      </div>
    </div>
  );
}