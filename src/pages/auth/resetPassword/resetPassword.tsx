import AnimatedPage from '@/components/ui/animatedPage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ResetPassword = () => {
  return (
    <AnimatedPage>
    <form>
      <div className="flex py-10 flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">New Password</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Confirm Password</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <Button variant={'primary'} type="submit" className="w-full">
          Reset Password
        </Button>
      </div>
    </form>
    </AnimatedPage>
  )
}

export default ResetPassword