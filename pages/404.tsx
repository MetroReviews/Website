import { MetaTags } from '../components/Header/Meta';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";


const NotFound = () => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    let messages = [
        'Hang on chief, You seem lost!',
        'Whoops, Looks like you hit a dead end!',
        'Hmm, Seems like my Dev Team forgot to put something here ;)'
    ];

    return (
      <>
        <MetaTags 
          title="404 | Metro Reviews"
          description={messages[Math.floor(Math.random() * messages.length)]}
          image="/img/logo.webp"
          name="Metro Reviews"
        />
        <div className="max-w-7xl text-center py-20 mx-auto">
            <h1 className="text-4xl font-extrabold text-white">404</h1>
            <p className="text-xl font-thin text-white text-opacity-75">
                {messages[Math.floor(Math.random()*messages.length)]}
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

export default NotFound;