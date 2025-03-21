import { Button } from '@shared/ui/Button'
import { useNavigate } from 'react-router-dom'

export const AuthButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/add-an-ad')
    } else {
      navigate('/auth')
    }
  }

  return (
    <Button className={className} variant="primary" onClick={handleClick}>
      Add an ad
    </Button>
  )
}
