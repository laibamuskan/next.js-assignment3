"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter()
  return (
    
    <>
    
    <h1>This is Home page</h1>
    <Link href={'/navbar'}>go to navbar</Link>
    <button onClick={() =>route.push('/navbar')}>
        
      </button>
    </>
  );
}
