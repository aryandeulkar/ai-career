import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function NotFound() {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="">

        <h1 className="gradient-title font-bold text-center text-4xl">404</h1>
        <p className=" text-center"> Page not found</p>
        <p className=" text-center pt-3 pb-3">OOPS!! The page you're looking for doesn't exist or has been moved </p>
        <div className=" flex justify-center">

        <Link href="/" className=" ">
        
        <Button>
Return Home
        </Button>
        </Link>
        </div>
        </div>
      </div>
    );
  }
  