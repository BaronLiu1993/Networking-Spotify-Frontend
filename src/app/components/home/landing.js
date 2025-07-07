export default function Landing() {
  return (
    <>
      <div className="bg-[#191414] text-[#FFFFFF] font-lexend h-[20rem] flex justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col font-light">
            <span>Hello UofT! 👋</span>
            <span className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Find Your Music Match
            </span>{" "}
            <span>With Just a QR Code </span>
          </div>
          <div className="flex">
            <button className="bg-purple-200 text-sm rounded-full p-3 text-[#191414] cursor-pointer hover:bg-purple-100">
              Create One Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
