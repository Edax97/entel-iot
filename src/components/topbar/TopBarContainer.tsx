import React, { useMemo } from "react";
import Notification from "./Notifications";
import TopBar from "./TopBar";
import UserOptions from "./UserOptions";

export default function TopBarContainer() {
  const userName = useMemo(() => "User 1", []);
  const notifications = useMemo(() => 10, []);

  return (
    <TopBar statusText={`Hola, ${userName}.`}>
      <Notification notifications={notifications} />
      <UserOptions userName={userName} />
    </TopBar>
  );
}
