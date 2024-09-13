import { Outlet } from 'react-router-dom';
import Container from '~/components/Container';
import PublicHeader from '~/components/Header/PublicHeader';

export default function Layout() {
  return (
    <Container>
      <PublicHeader />
      <Outlet />
    </Container>
  );
}
