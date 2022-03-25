import { Outlet } from "remix";

export default function Layout() {
  return (
    <div>
      <div>Welcome from __layout.tsx</div>
      <Outlet />
    </div>
  );
}
