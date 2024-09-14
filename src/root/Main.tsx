import { setupFirebase } from '~/lib/firebase';
import { Router } from '~/router/Router';

setupFirebase();

function Main() {
  return (
    <main>
      <Router />
    </main>
  );
}

export default Main;
