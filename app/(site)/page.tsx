import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Navbar />
      {/* @ts-expect-error Async Server Component */}
      <Main />
    </div>
  );
}
