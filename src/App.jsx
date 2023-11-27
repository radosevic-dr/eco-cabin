import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { Dashboard, Cabins, Bookings, Users, Login, NotFound, Account, Settings } from "./pages";
import { MainLayout } from "./ui";
import GlobalStyles from "./styles/GlobalStyles";



function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000
          },
          style: {
            fontSize: "2rem",
            maxWidth: "30rem",
            padding: "2rem 3rem",
            backgroundColor: "var(--color-gray-200)"
          }
        }}
      />
    </>
  );
}

export default App;
