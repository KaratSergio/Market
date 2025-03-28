import { FC } from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  LoginForm,
  RegisterForm,
} from '@features/index'

export const AuthPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center lg:flex-row">
      <div className="flex w-full flex-col items-center p-4">
        <Tabs
          defaultValue="register"
          className="w-full max-w-[335px] lg:max-w-90"
        >
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

      <div className="hidden min-h-screen w-2xl items-center justify-center rounded-l-[80px] bg-yellow-200 lg:flex">
        <img src="/images/img.png" alt="img" />
      </div>
    </div>
  )
}
