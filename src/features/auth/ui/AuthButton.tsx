import { Button } from '@shared/index'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const AuthButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const token = localStorage.getItem('token')
    navigate(token ? '/publish-ad' : '/auth')
  }

  return (
    <Button
      className={twMerge('w-fit px-5 py-[14px]', className)}
      variant="primary"
      onClick={handleClick}
    >
      Publish Ad
    </Button>
  )
}
