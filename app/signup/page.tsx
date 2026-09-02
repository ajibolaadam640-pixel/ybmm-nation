'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else {
      alert('Check your email to confirm!')
      router.push('/login')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <form onSubmit={handleSignUp} className="w-80 space-y-4 p-6 border-green-500 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-green-400">Join YBMM NATION</h1>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 bg-gray-900 rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 bg-gray-900 rounded"/>
        <button disabled={loading} className="w-full bg-green-500 p-2 rounded font-bold">{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
    </div>
  )
}
