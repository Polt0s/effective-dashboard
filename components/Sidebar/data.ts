import iconAnalytics from 'assets/svg/routes/iconAnalytics.svg';
import iconCalendar from 'assets/svg/routes/iconCalendar.svg';
import iconDashboard from 'assets/svg/routes/iconDashboard.svg';
import iconInvoice from 'assets/svg/routes/iconInvoice.svg';
import iconMessages from 'assets/svg/routes/iconMessages.svg';
import iconNotification from 'assets/svg/routes/iconNotification.svg';
import iconSchedule from 'assets/svg/routes/iconSchedule.svg';
import iconSettings from 'assets/svg/routes/iconSettings.svg';

type TRouterSidebar = {
    display_name: string;
    route: string;
    icon: string;
}

export const routesSidebar: TRouterSidebar[] = [
  {
      "display_name": "Dashboard",
      "route": "/dashboard",
      "icon": iconDashboard
  },
  {
      "display_name": "Analytics",
      "route": "/analytics",
      "icon": iconAnalytics
  },
  {
      "display_name": "Invoice",
      "route": "/invoice",
      "icon": iconInvoice
  },
  {
      "display_name": "Schedule",
      "route": "/schedule",
      "icon": iconSchedule
  },
  {
      "display_name": "Calendar",
      "route": "/calendar",
      "icon": iconCalendar
  },
  {
      "display_name": "Messages",
      "route": "/messages",
      "icon": iconMessages
  },
  {
      "display_name": "Notification",
      "route": "/notification",
      "icon": iconNotification
  },
  {
      "display_name": "Settings",
      "route": "/settings",
      "icon": iconSettings
  }
];
