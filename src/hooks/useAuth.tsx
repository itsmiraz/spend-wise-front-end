// "use server"

// import { signInSchema, signUpSchema, forgotPasswordSchema, resetPasswordSchema, verifyEmailSchema } from "@/lib/schemas"
// import { useNavigation } from "react-router-dom"

// export async function signIn(prevState: any, formData: FormData) {
//   const validatedFields = signInSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }

//   // TODO: Implement sign-in logic here
//   // If successful, redirect to dashboard
//   navigate("/dashboard")
// }

// export async function signUp(prevState: any, formData: FormData) {
//   const validatedFields = signUpSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }

//   // TODO: Implement sign-up logic here
//   // If successful, navigate to email verification page
//   navigate("/auth/verify-email")
// }

// export async function forgotPassword(prevState: any, formData: FormData) {
//   const validatedFields = forgotPasswordSchema.safeParse({
//     email: formData.get("email"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }

//   // TODO: Implement forgot password logic here
//   // If successful, show success message
//   return { success: true }
// }

// export async function resetPassword(prevState: any, formData: FormData) {
//   const validatedFields = resetPasswordSchema.safeParse({
//     password: formData.get("password"),
//     confirmPassword: formData.get("confirmPassword"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }

//   // TODO: Implement reset password logic here
//   // If successful, navigate to sign-in page
//   navigate("/auth/sign-in")
// }

// export async function verifyEmail(prevState: any, formData: FormData) {
//   const validatedFields = verifyEmailSchema.safeParse({
//     token: formData.get("token"),
//   })
//  const navigate = useNavigation()
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }

//   // TODO: Implement email verification logic here
//   // If successful, navigate to dashboard
//   navigate("/dashboard")
// }

