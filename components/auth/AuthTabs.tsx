import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Account</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}

export default AuthTabs;