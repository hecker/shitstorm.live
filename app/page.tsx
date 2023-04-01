import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/shit.png"
        alt="It is shit."
        width={300}
        height={300}
        className="rounded-full"
      />
      <button className="bg-gray-800 text-white px-4 py-2 rounded mt-4">
        <FaGithub className="inline-block mr-2" />
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/hecker/shitstorm.live"
        >
          Star on GitHub
        </Link>
      </button>
    </div>
  );
};

export default Home;
