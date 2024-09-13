import { Outlet } from 'react-router-dom';
import Container from '~/components/Container';
import AuthenticatedHeader from '~/components/Header/AuthenticatedHeader';

export default function DashboardLayout() {
  return (
    <Container>
      <AuthenticatedHeader />
      <Outlet />
    </Container>
  );
}
