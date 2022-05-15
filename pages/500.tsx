import { MetaTags } from '../components/Header/Meta';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";

const ErrorPage = () => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    let messages = [
        "Whoops, Seems like something went wrong here! Please open a",
        "Woahh, Hold up chief. You hit a bad spot here! Please open a",
        "Okay, You may need to retrace your steps chief! Please open a"
    ]

    return (
      <>
        <MetaTags 
          title="500 | Metro Reviews"
          description="Something seems wrong here."
          image="/img/logo.webp"
          name="Metro Reviews"
        />
        <div className="max-w-7xl text-center py-20 mx-auto">
            <h1 className="text-4xl font-extrabold text-white">500</h1>
            <p className="text-xl font-thin text-white text-opacity-75">
                {messages[Math.floor(Math.random()*messages.length)]}
                {" "}
                <Link href="/github"><span className="underline hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer">GitHub Issue</span></Link>
                <br />
                With any useful errors from your Browser Console
            </p>
            <button
                className="w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-amber-400 hover:bg-opacity-50 transition duration-200"
                onClick={() => {
                    setClicked(true);
                    router.back();
                }}
            >
                {clicked ? <i className="fad fa-spinner-third fa-spin text-white" /> : <><i className='fa fa-arrow-left mr-2' />Go Back</>}
            </button>
        </div>
      </>
    )
}

export default ErrorPage;