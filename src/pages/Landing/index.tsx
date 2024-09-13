import { useRef, useState } from 'react';
import Container from '~/components/Container';
import { Link } from 'react-router-dom';
// import { useAuthState } from '~/context/UserContext';
// import { SignInButton } from '~/components/auth/SignInButton';
// import { SignOutButton } from '~/components/auth/SignOutButton';
import { Head } from '~/components/Head';

function SignInButton() {
  return (
    <button type="button" className="btn btn-active btn-neutral btn-wide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 50 50" width="20px" height="20px">
        <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z" />
      </svg>
      Sign in with Google
    </button>
  );
}

function Footer() {
  return (
    <footer className="bg-base-200 py-4 shadow-inner mt-8">
      <Container>
        <p className="font-semibold text-center text-secondary-content">
          Lift Lab is made by{' '}
          <Link target="_blank" rel="noopener" to="https://www.abhin.dev/" className="text-primary underline">
            Abhin Rustagi
          </Link>
          .
        </p>
      </Container>
    </footer>
  );
}

export default function Landing() {
  // const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head />
      <Container>
        <div className="w-full flex flex-col items-center pt-8">
          <div>
            <Link to="/" className="flex flex-col items-center">
              <div className="text-4xl mb-2">🏋️</div>
              <h1 className="font-bold text-2xl">Lift Lab</h1>
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-base-content mt-12 mb-8">Track progress – one rep a time</h1>
          <SignInButton />
        </div>
      </Container>
      <Footer />
      {/* <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-3xl font-bold">
              <a className="link link-primary" target="_blank" href="https://vitejs.dev/" rel="noreferrer">
                Vite
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://reactjs.org/" rel="noreferrer">
                React
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://www.typescriptlang.org/" rel="noreferrer">
                TypeScript
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://tailwindcss.com/" rel="noreferrer">
                TailwindCSS
              </a>{' '}
              Starter
            </h1>
            <p className="mt-4 text-lg">
              For fast <b>prototyping</b>. Already set up{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/firebase/firebase-js-sdk"
                rel="noreferrer"
              >
                Firebase(v9)
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://daisyui.com/" rel="noreferrer">
                daisyUI
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://github.com/eslint/eslint" rel="noreferrer">
                ESLint
              </a>
              ,{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/prettier/prettier"
                rel="noreferrer"
              >
                Prettier
              </a>
              .
            </p>
            <div className="mt-4 grid gap-2">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
              <button onClick={() => setIsOpen(true)}>Display Dialog</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Dialog
        className="flex fixed inset-0 z-10 overflow-y-auto"
        initialFocus={completeButtonRef}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-center min-h-screen w-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded max-w-120 p-8 mx-auto">
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog description</Dialog.Description>
            <button
              ref={completeButtonRef}
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </Dialog> */}
    </>
  );
}
