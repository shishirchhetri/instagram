import React, { useState } from 'react'

const Register = () => {
    const[username, setUsername] =useState('')
    const[email,setEmail]= useState('');
    const[password, setPassword] = useState('');
    const[confirmPass, setConfirmPass]= useState('');
  return (
    <div className="mt-4 grow flex items-center justify-around h-screen">
      <div className="flex-col align-middle border p-4 -translate-y-20 overflow-hidden rounded-md">
        <h2 className="text-3xl text-center p-2">Sign up</h2>
        <form
          className="flex-col max-w-md mx-auto p-2 gap-2 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <button
            type="submit"
            className="w-full border px-4 py-2 m-auto bg-red-500 rounded-full text-white"
          >
            Sign up
          </button>
        </form>
        <div className="m-2">
          Already have an account?{" "}
          <Link className="underline mx-1" to={"/login"}>
            Login here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register