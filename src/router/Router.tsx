import { onAuthStateChanged } from 'firebase/auth';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, useNavigate, useRoutes } from 'react-router-dom';
import { useSignIn, useSignOut } from '~/context/UserContext';
import { useAuth } from '~/lib/firebase';
import Loading from '~/pages/shared/Loading';
import routes from './Routes';

const InnerRouter = () => {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  const navigate = useNavigate();
  const element = useRoutes(routes);

  useEffect(() => {
    const auth = useAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
        navigate(`/u/${user.uid}`);
      } else {
        signOut();
      }
    });
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};
