import { Stack, useRouter } from "expo-router"; 
import { useEffect } from "react"; 

export default function Layout() { 
  const router = useRouter(); 

  useEffect(() => { 
    
    if (router) { 
      router.replace("/FirstScreen"); 
    }
  }, [router]); 

  return (
    <Stack screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="DicasScreen/index" /> 
      <Stack.Screen name="FirstScreen/index" />
      <Stack.Screen name="LoginScreen/index" />
      <Stack.Screen name="MainScreen/index" />
      <Stack.Screen name="NewUserScreen/index"/>
      <Stack.Screen name="ResetPassword/index"/>
      <Stack.Screen name="SecondScreen"/>
    </Stack>
  );
}