import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <main className=" flex flex-col h-full items-center justify-center">
      <CardWrapper
        label="Login to your account"
        backButtonLabel="Don't have an account?"
        backButtonLink="Register here"
        backButtonHref="/register"
      >
        <LoginForm />
      </CardWrapper>
    </main>
  );
};

export default LoginPage;
