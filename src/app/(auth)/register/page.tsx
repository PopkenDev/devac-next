import { CardWrapper } from '@/components/auth/card-wrapper';
import { RegisterForm } from '@/components/auth/register-form';

const RegisterPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <CardWrapper
        label="Create a new account"
        subText="Start your dev journey here"
        backButtonLabel="Already have an account?"
        backButtonLink="Login here"
        backButtonHref="/login"
      >
        <RegisterForm />
      </CardWrapper>
    </main>
  );
};

export default RegisterPage;
