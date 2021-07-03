import Head from 'next/head';
import RegisterUserForm from '../components/RegisterUserForm';
import Link from 'next/link';

function Register() {
  const registerForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    photo: '',
  };
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen font-mainFont justify-center items-center">
        <div className="max-w-md w-full space-y-4">
          <h2 className="text-3xl font-black text-center">
            Register your account
          </h2>
          <p className="text-gray-400 text-center text-sm">
            Already register?{' '}
            <span className="text-blue-800 font-bold">
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            </span>
          </p>
          <RegisterUserForm registerForm={registerForm} />
        </div>
      </main>
    </div>
  );
}

export default Register;
