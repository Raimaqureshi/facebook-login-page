import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center md:flex-row">
      <div className="text-2xl w-full md:w-1/2 px-8 md:px-16 mb-6 md:mb-0">
        <Image src={"/pictures/facebook.svg"} width={300} height={100} alt="Facebook Logo" />
        <p className="ml-2 md:ml-7 -mt-3 text-center md:text-left text-black">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white flex flex-col p-5 rounded-xl w-full md:w-1/3 mx-4 sm:mx-0">
        <input className="my-2 border border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Email address or phone number" />
        <input className="my-2 border border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600" type="password" placeholder="Password" />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-500">Log in</button>
        <button className="text-blue-600 text-sm hover:underline my-2">Forgotten password?</button>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit px-4 mx-auto">Create new account</button>
      </div>
    </div>
  );
}
