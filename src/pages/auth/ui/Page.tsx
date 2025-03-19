import { FC } from 'react'
import { LoginForm } from '@features/auth'
import { RegisterForm } from '@features/auth'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@features/auth/ui/tabs'

export const AuthPage: FC = () => {
  return (
    <div className='flex flex-row '>
     <div className="container mt-20 flex flex-col items-center">
      <Tabs defaultValue="register" className="mt-10 w-[350px]">
        <TabsList className="flex justify-center">
          <TabsTrigger value="register">Registration</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
     </div>
     <div className='rounded-[80px_0_0_80px] w-160 bg-[#faf689] flex items-center justify-center min-h-screen'>
        <img src="/public/images/img.png" alt="img" />
     </div>
    </div>
  )
}
