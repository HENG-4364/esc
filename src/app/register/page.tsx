import dynamic from "next/dynamic";

const RegisterScreen = dynamic(
  () => import("@/screen/register/register-screen"),
  { ssr: false }
);

export default function Register() {
  return <RegisterScreen />;
}
