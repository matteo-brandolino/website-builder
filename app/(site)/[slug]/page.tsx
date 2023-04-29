import Link from "next/link";

export default function Page({ params }: any) {
  return (
    <div>
      Slug <Link href={"/"}>Home</Link>
    </div>
  );
}
