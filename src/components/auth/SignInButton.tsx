import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  User,
  UserCredential,
} from 'firebase/auth';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/lib/firebase';

export const SignInButton = () => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    console.log('Came here');

    signInWithPopup(auth, provider).then(({ user }: UserCredential) => {
      // getRedirectResult(auth).then((result: UserCredential | null) => {
      // if (result) {
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential?.accessToken;

      //   // The signed-in user info.
      //   const user = result.user;
      //   console.log(user);
      // } else {
      //   console.log('No result found');
      // }
      // });
      navigate(`/u/${user.uid}`);
    });
  };

  return (
    <button onClick={handleClick} type="button" className="btn btn-primary normal-case min-w-60">
      Sign In With Google
    </button>
  );
};
