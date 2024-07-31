import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({ component: RootRoute });

function RootRoute() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
