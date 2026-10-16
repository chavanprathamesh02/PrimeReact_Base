import type { AppMenuItem } from "../types/layout";

export const menuModel: AppMenuItem[] = [
  {
    key: "home",
    label: "",
    items: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: "pi pi-home",
        to: "/",
      },
      {
        key: "shift-reports",
        label: "Shift Reports",
        icon: "pi pi-chart-line",
        items: [
          {
            key: "daily-report",
            label: "Daily Report",
            to: "/reports/shifts/daily",
          },

          {
            key: "monthly-report",
            label: "Monthly Report",
            to: "/reports/shifts/monthly",
          },
        ],
      },
      {
        key: "roles",
        label: "Roles",
        icon: "pi pi-id-card",
        items: [
          {
            key: "user-roles",
            label: "User Roles",
            to: "/admin/roles/users",
          },

          {
            key: "permissions",
            label: "Permissions",
            to: "/admin/roles/permissions",
          },
        ],
      },
    ],
  },
  //   {
  //     key: "reports",
  //     label: "Reports",
  //     items: [],
  //   },
];
