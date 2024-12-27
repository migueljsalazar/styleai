import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600">Rate My Style</h2>
        <h3 className="text-xl font-semibold text-center text-gray-600">Log In</h3>
        <LoginForm />
        <div className="text-center mt-4">
          <a href="/auth/signup" className="text-blue-500 hover:underline">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  )
}

