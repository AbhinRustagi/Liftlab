import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/context/UserContext';
import Main from '~/root/Main';

export const App = () => {
  return (
    <HelmetProvider>
      {/* <AuthProvider> */}
      <Main />
      {/* </AuthProvider> */}
    </HelmetProvider>
  );
};
