import { Button } from '@/components/ui/button';
import React, { ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { ScrollRestoration, } from 'react-router-dom';

const VerifyEmail = () => {
  const userMail = 'test@email.com'
  // const dispatch = useAppDispatch();
  // const [verifyEmail] = useVerifyEmailMutation();
  // const [resendOtp] = useResendOtpMutation();
  // const [, setLoading] = useState(false);
  const [Waiting, setWaiting] = useState(false);
  const isLoading = false
  // Timer state
  const [timeLeft, setTimeLeft] = useState(120);
  const [lastOtpSent, setLastOtpSent] = useState<number | null>(null);

  // const [searchParams] = useSearchParams();
  // const navigate = useNavigate();

  // const userMail = searchParams.get("email");

  const [values, setValues] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // When the page first loads, get the time the OTP was sent
    const storedOtpTime = localStorage.getItem("otpSentTime");
    if (storedOtpTime) {
      const otpTime = parseInt(storedOtpTime);
      setLastOtpSent(otpTime);
      // startCountdown(otpTime);
    }
  }, []);

  useEffect(() => {
    // If OTP was already sent, start the countdown
    if (lastOtpSent !== null) {
      const interval = setInterval(() => {
        const timeElapsed = Math.floor((Date.now() - lastOtpSent) / 1000);
        const timeRemaining = 120 - timeElapsed; // 2 minutes
        if (timeRemaining <= 0) {
          clearInterval(interval);
          setTimeLeft(0);
          setWaiting(false); // Enable Resend button again
        } else {
          setTimeLeft(timeRemaining);
        }
      }, 1000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [lastOtpSent]);
  const handleChange = (value: string, index: number) => {
    const newValues = [...values];
    newValues[index] = value;

    if (value.length === 1 && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    setValues(newValues);
    setError("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && values[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    const pasteValues = paste.split("");
    const newValues = [...values];

    pasteValues.forEach((value, i) => {
      newValues[i] = value;
      if (i < 5) inputs.current[i + 1]?.focus();
    });

    setValues(newValues);
    setError("");
    e.preventDefault();
  };

  // Handler Submit
  // const handleSubmit = async (values: string[]) => {
  //   if (values.some((value) => value === "")) {
  //     setError("Please fill up all fields.");
  //     return;
  //   }
  //   const code = values.join("");

  //   const payload = {
  //     email: userMail,
  //     otp: code,
  //   };
  //   try {
  //     const res = await verifyEmail(payload).unwrap();
  //     if (res.data.success) {
  //       const user = VerifyToken(res.data.accessToken);
  //       dispatch(setUser({ user: user, token: res.data.accessToken }));

  //       toast.success("Email Verified");
  //       setLoading(false);
  //       navigate("/onboarding");
  //     } else {
  //       toast.error(res?.data?.message);
  //     }
  //   } catch (err) {
  //     setLoading(false);
  //     toast.error("Something Went Wrong");

  //     const error = err as { data?: { errorSource?: { message: string }[] } };

  //     if (error?.data) {
  //       error?.data?.errorSource?.forEach((item) => toast.error(item.message));
  //     }

  //     console.log(err);
  //   }
  // };
  // const handleRequestForNewOtp = async () => {
  //   if (Waiting) {
  //     toast.error("Please wait 2 minutes before requesting a new OTP.");
  //     return;
  //   }

  //   const payload = {
  //     email: userMail,
  //   };

  //   setLoading(true);

  //   await handleApiRequest({
  //     payload: payload,
  //     requestFunction: resendOtp,
  //     onSuccess: () => {
  //       setLoading(false);
  //       setWaiting(true);
  //       setLastOtpSent(Date.now());
  //       localStorage.setItem("otpSentTime", Date.now().toString()); // Store the time of OTP sent
  //       toast.success("OTP sent to your email!");
  //     },
  //     onError: (err) => {
  //       setWaiting(false);
  //       setLoading(false);
  //       const error = err as { data?: { errorSource?: { message: string }[] } };

  //       if (error?.data) {
  //         error?.data?.errorSource?.forEach((item) =>
  //           toast.error(item.message)
  //         );
  //       } else {
  //         toast.error("Some Thing Went Wrong");
  //       }
  //     },
  //   });
  return (
    <div className='py-6'>

      <h2 className='text-2xl text-center  font-medium'>Verify Email</h2>
      <p className="text-sm text-center leading-[18px] mt-4 text-gray-500">
        Enter the verification code we emailed to : {userMail}{" "}
        <span className="text-[#344054] underline font-medium">
          (Use a different email)
        </span>
      </p>

      <div className="flex-1 ">
        <div className="space-y-3 py-[30px]">
          <div>
            <div className="flex justify-center space-x-3">
              {values.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputs.current[index] = el;
                  }}
                  type="text"
                  value={value}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onPaste={handlePaste}
                  maxLength={1}
                  className="w-9 h-9 sm:w-10 md:h-10 text-center border border-[#D0D5DD] focus:outline-yellow-500 rounded-[8px] text-sm placeholder:text-sm"
                />
              ))}
            </div>
            {error && <p className="text-red-500 mt-2 text-sm"> {error}</p>}
          </div>
          <button
          className='text-xs mt-2 pl-2'
            // onClick={() => handleRequestForNewOtp()}
            disabled={Waiting}>
            {Waiting
              ? `You will be able to resend the code in ${timeLeft} seconds.`
              : isLoading
                ? "Sending"
                : "Resend Code"}
          </button>
        </div>
        <div className="max-w-[400px]">
          <Button
          size={'lg'}
          variant={'primary'}
            // disabled={isLoading}
            // onClick={() => handleSubmit(values)}
            color="#17457D"
            className="text-base leading-[24px] w-full py-[10px]"
          >
            {isLoading ? (
              <div className="flex space-x-2 justify-center items-center py-2">
                <span className="sr-only">Loading...</span>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  )
}

export default VerifyEmail