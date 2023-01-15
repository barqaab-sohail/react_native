// import { StatusBar } from "expo-status-bar";
// import Routes from "./routes/Routes";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();
// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Routes />
//     </QueryClientProvider>
//   );
// }

import React from "react";
import { StatusBar, Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StatusBar backgroundColor="#06bcee" />
        <Navigation />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
