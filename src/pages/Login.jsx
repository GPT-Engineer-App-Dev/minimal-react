import { Container, VStack, Box, Text, Button } from "@chakra-ui/react";
import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";
import { useState } from "react";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (!session) {
    return (
      <Container centerContent>
        {showLogin ? (
          <SupabaseAuthUI />
        ) : (
          <Button onClick={() => setShowLogin(true)}>Login</Button>
        )}
      </Container>
    );
  }

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Text>Welcome, {session.user.email}</Text>
        <Button onClick={logout}>Logout</Button>
      </VStack>
    </Container>
  );
};

export default Login;