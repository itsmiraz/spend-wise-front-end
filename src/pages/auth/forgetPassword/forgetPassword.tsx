import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const ForgetPassword = () => {
    return (
        <form>
            <div className="flex py-20 flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Forgot Password</h1>
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
                <Button variant={'primary'} type="submit" className="w-full">
                    Forget Password
                </Button>
                <p className="text-xs">Resend</p>
            </div>
        </form>
    )
}

export default ForgetPassword