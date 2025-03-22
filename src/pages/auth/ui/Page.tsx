import { FC } from 'react'
import { LoginForm } from '@features/auth'
import { RegisterForm } from '@features/auth'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@features/auth/ui/tabs'

export const AuthPage: FC = () => {
  return (

    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex w-full flex-col items-center px-[21px] pt-6 lg:px-55 lg:pt-15">
        <Tabs defaultValue="register" className="w-full max-w-[335px] lg:max-w-90">
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

      <div className="hidden min-h-screen w-160 items-center justify-center rounded-[80px_0_0_80px] bg-[#faf689] lg:flex">
        <img src="/public/images/img.png" alt="img" />
      </div>
    </div>
  )
}
