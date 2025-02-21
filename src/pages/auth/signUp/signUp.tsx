import { Button, IconButton } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GoogleIcon from '@/assets/icons/googleIcon.svg'
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <form >
    <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Welcome to Spend Wise</h1>
            <p className="text-balance mt-2 text-muted-foreground">
                Create account at Spend Wise
            </p>
        </div>
        <div className="grid gap-2">
            <Label htmlFor="email">Full Name</Label>
            <Input
                id="name"
                type="text"
                placeholder="Reacher"
                required
            />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
            />
        </div>
        <div className="grid gap-2">
            <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
             
            </div>
            <Input id="password" type="password" required />
        </div>
        <Button  variant={'primary'} type="submit" className="w-full">
            Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-800 after:border-border">
            <span className="relative  z-10 bg-gray-950 px-2 text-muted-foreground">
                Or continue with
            </span>
        </div>
        <div className=" gap-4">

            {/* Social */}
            <IconButton
                //   onClick={handleGoogleSignIn}
                className={"w-full"}
                icon={<GoogleIcon />}
            >
                Continue with Google
            </IconButton>

        </div>
        <div className="text-center text-sm">
         Already have a account?{" "}
            <Link to="/auth/login" className="underline underline-offset-4">
                Sign In
            </Link>
        </div>
    </div>
</form>
  )
}

export default SignUp