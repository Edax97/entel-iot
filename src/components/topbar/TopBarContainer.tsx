import React, { useMemo } from "react";
import { useAppStore } from "../../store/store";
import SidebarOff from "../sidebar/SidebarOff";
import Notification from "./Notifications";
import TopBar from "./TopBar";
import UserOptions from "./UserOptions";

export default function TopBarContainer() {
  const userName = useAppStore((state) => state.user?.username);
  const logout = useAppStore((state) => state.logout);
  const notifications = useMemo(() => 10, []);

  return (
    <TopBar statusText={`Hola, ${userName}.`}>
      <SidebarOff />

      <Notification notifications={notifications} />
      <UserOptions userName={userName || ""} onLogout={logout} />
    </TopBar>
  );
}
