import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-dvh w-full justify-center flex items-center">
        {!show ? (
          <>
            <button
              onClick={() => {
                setShow(true);
              }}
              className="text-xl text-white px-5 py-2 rounded-md bg-pink-400 hover:scale-110 duration-150"
            >
              Click
            </button>
          </>
        ) : (
          <>
            <div className="w-2/3 anime max-w-xl">
              <p className="text-2xl font-bold text-center">
                Happy Birthday🎉 <br /> Namtip 😊💝
              </p>
              <p className="text-2xl font-bold m-5 text-center">
                You are truly amazing,I wish you good health and success in
                everything you do. <br />
                May this year bring you happiness <br />
                Thank you for everything!🪻🌻
              </p>
              <p className="text-2xl font-bold m-5 text-center">Love you ❤️</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
