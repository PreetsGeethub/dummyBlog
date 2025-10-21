import React from 'react'
import { Login as LoginComponent } from '../components'  // ✅ Capital L

function LoginPage() {  // ✅ Renamed to avoid conflict
  return (
    <div className='py-8'>
        <LoginComponent />  {/* ✅ Fixed: was <loginComponent /> */}
    </div>
  )
}

export default LoginPage