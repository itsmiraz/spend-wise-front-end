import { Button, IconButton } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GoogleIcon from '@/assets/icons/googleIcon.svg'
import { Link } from "react-router-dom"
import AnimatedPage from "@/components/ui/animatedPage"
const SignIn = () => {
    return (
        <AnimatedPage>
            <form>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">Welcome back</h1>
                        <p className="text-balance text-muted-foreground">
                            Login to your Spendium account
                        </p>
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
                            <Link
                                to="/auth/forget-password"
                                className="ml-auto text-sm underline-offset-2 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button variant={'primary'} type="submit" className="w-full">
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
                        Don&apos;t have an account?{" "}
                        <Link to="/auth/register" className="underline underline-offset-4">
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </AnimatedPage>
    )
}

export default SignIn