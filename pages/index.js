// import Script from "next/script";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      {/* <Footer /> */}
    </>
  );
}
function NavBtn({ href, label }) {
  return (
    <li>
      <a
        href={href}
        className="rounded-lg bg-white flex mt-4 mb-4 md:bg-white text-lg px-4 py-2 pt-2 pb-2.5 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-gray-600"
      >
        {/* hover:bg-blue-40 hover:border-white hover:border-s-2 hover:border-r-2 hover:border-t-2 hover:border-b-2 hover:text-white */}
        {label}
      </a>
    </li>
  );
}

function Nav() {
  return (
    <nav>
      <div className="menu">
        <input type="checkbox" id="check" />

        <div className="logo gap-4 text-2xl font-bold text-blue-40">
          <img
            src="/img/logo/Alternate.png"
            alt="Stellar Logo with space background"
          />
          {/* use <Image /> which is built into next.js but issue is resizing it */}
          <a
            className="bg-gray-100 px-4 py-2 shadow-md shadow-gray-400 rounded-xl hover:shadow-inner hover:shadow-gray-400"
            href="./index.html"
          >
            Stellar Stellmacher
          </a>
        </div>

        <ul className="gap-4 flex">
          <label className="button cancel" for="check">
            {" "}
            <FiX />{" "}
          </label>
          <NavBtn href="#About" label="About" />

          <NavBtn href="#Projects" label="Projects" />

          <NavBtn href="#Contact" label="Contact" />
        </ul>
        <label className="button burger" for="check">
          {" "}
          <FiMenu />{" "}
        </label>
      </div>
    </nav>
  );
}
import { AiOutlineDownload, AiOutlineInfoCircle } from "react-icons/ai";

function Button({ name, Icon }) {
  return (
    <button
      className="rounded-xl p-4 text-blue-40 font-medium flex items-center gap-1 justify-center "
      type="button"
    >
      {name}
      <Icon />
    </button>
  );
}
function H2({ input }) {
  return (
    <h2 className="text-4xl text-center m-4 font-medium text-blue-40">
      {input}
    </h2>
  );
}

function Project({ label, src }) {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className="rounded-2xl bg-cover flex items-end justify-center bg-gray-400 w-full aspect-square text-center shadow-gray-400 shadow-xl hover:animate-bounce"
    >
      <div className="bg-blue-40 rounded-xl py-2 px-4 text-white">{label}</div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="glass">
        <div className="landing shadow-2xl">
          <h1 className="anim-typewriter ">Hello, I'm Jai</h1>
          <div className="text-blue-40 p-4 sm:hidden text-center text-4xl font-semibold">
            Jai Stellmacher
          </div>
          {/* I want the h2 to show only on mobile sizes^^ */}
          <H2 input="Fullstack Software Engineer In Training" />
          <div className="container mx-auto h-screen">
            <div className="grid sm:grid-cols-2 justify-center gap-4 m-8">
              <Button name="Download CV" Icon={AiOutlineDownload} />
              <Button name="About Me" Icon={AiOutlineInfoCircle} />
            </div>
            {/* <div className="hr-rule w-full px-8"> */}
            <div
              id="hr-line"
              className=" shadow-inner shadow-gray-500 bg-white rounded-lg h-8 justify-center mx-8"
            ></div>
            {/* </div> */}
            <H2 input="Projects" />
            <div className="m-8">
              <div className="projects gap-4 grid grid-cols-4 p-4">
                <Project src="https://picsum.photos/200" label="Test 1" />
                <Project
                  src="https://picsum.photos/200/300?random=2"
                  label="Test 2"
                />
                <Project
                  src="https://picsum.photos/200/300?random=3"
                  label="Test 3"
                />
                <Project
                  src="https://picsum.photos/200/300?random=4"
                  label="Test 4"
                />
                <Project
                  src="https://picsum.photos/200/300?random=5"
                  label="Test 5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// function Footer(){
//   return(

//   )
// }

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">pages/index.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
