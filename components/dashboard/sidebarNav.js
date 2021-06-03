import { useRouter } from "next/router";
import SidebarElement from "./sidebarElement";
import {
  HomeIcon,
  CogIcon,
  ShoppingBagIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

function SidebarNav() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div>
      <SidebarElement
        className={currentPath === "/dashboard" ? "active" : "dashboardNav"}
        text="Dashboard"
        href="dashboard"
        Icon={HomeIcon}
      />
      <SidebarElement
        className={
          currentPath === "/dashboard/product" ? "active" : "dashboardNav"
        }
        text="Product"
        href="dashboard/product"
        Icon={ClipboardListIcon}
      />
      <SidebarElement
        className={
          currentPath === "/dashboard/order" ? "active" : "dashboardNav"
        }
        text="Order"
        href="dashboard/order"
        Icon={ShoppingBagIcon}
      />
      <SidebarElement
        className={
          currentPath === "/dashboard/settings" ? "active" : "dashboardNav"
        }
        text="Settings"
        href="dashboard/settings"
        Icon={CogIcon}
      />
    </div>
  );
}

export default SidebarNav;
