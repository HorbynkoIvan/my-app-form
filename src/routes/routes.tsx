import { MainLayout, AuthLayout } from "layouts";
import { Login, Registration, ForgotPassword } from "pages";
import {
  Bar,
  Form,
  FAQ,
  Calendar,
  Line,
  Contacts,
  Pie,
  Team,
  Geography,
  Invoices,
  Dashboard,
  UserFeature,
} from "features";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/team", element: <Team /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/invoices", element: <Invoices /> },
      { path: "/form", element: <Form /> },
      { path: "/bar", element: <Bar /> },
      { path: "/pie", element: <Pie /> },
      { path: "/line", element: <Line /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/geography", element: <Geography /> },
      { path: "/user", element: <UserFeature /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
];
