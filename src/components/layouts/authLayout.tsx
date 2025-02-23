import { Outlet } from 'react-router-dom'
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,

} from "@/components/ui/card"
import AuthCoverImage from '@/assets/images/auth-cover.jpg'
import AnimatedPage from '../ui/animatedPage'
const AuthLayout = () => {

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className={cn("flex flex-col gap-6",)} >
                    <Card className="overflow-hidden bg-gray-950 text-gray-200 border-gray-800">
                        <CardContent className="grid p-0 md:grid-cols-2">

                            <div className="p-6 md:p-8">
                                <AnimatedPage>
                                    <Outlet />
                                </AnimatedPage>
                            </div>
                            <div className="relative hidden transition-all ease-in-out duration-300 bg-muted md:block">
                                <img
                                    src={AuthCoverImage}
                                    alt="Image"
                                    className="absolute transition-all ease-in-out duration-300 inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="text-balance text-gray-500 text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AuthLayout