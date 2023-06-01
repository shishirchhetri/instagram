import React from 'react'

const Login = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around h-screen">
      <div className="flex-col align-middle border p-4   overflow-hidden rounded-md -translate-y-10">
        <h2 className="text-3xl text-center p-2">Login</h2>
        <form
          className="flex flex-col  p-4 gap-2 rounded-lg"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full border px-4 py-2 m-auto bg-red-500 rounded-full text-white">
            Login
          </button>
          <div className="m-2">
            Don't have account yet?{" "}
            <Link className="underline mx-1" to={"/register"}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login