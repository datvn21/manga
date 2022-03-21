import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const enterURL = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    router.push("/manga?url=" + event.target[0].value);
  };
  return (
    <div className="h-screen w-full overflow-hidden flex justify-center items-center flex-col">
      <img
        alt="logo"
        className="md:w-1/3 w-5/6 h-auto m-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Darling_in_the_Franxx_logo.svg/2560px-Darling_in_the_Franxx_logo.svg.png"
      />
      <form
        onSubmit={enterURL}
        className="md:w-2/4 w-5/6 h-12 rounded-2xl flex bg-blue-300"
      >
        <input
          className="w-full p-4 h-full outline-none font-bold text-gray-500 rounded-2xl border-4 border-solid border-blue-300"
          type="text"
          name="name"
          placeholder="Type URL your manga"
        />
        <button
          type="submit"
          className="w-12 h-full font-bold outline-none text-white text-2xl bg-blue-300 rounded-r-2xl border-4 border-solid border-blue-300 "
        >
          Go
        </button>
      </form>
    </div>
  );
}
