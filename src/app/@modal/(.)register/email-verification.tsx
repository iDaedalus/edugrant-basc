import verification from "@/assets/undraw_mail-sent_ujev.svg";
import { motion } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function EmailVerification() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="grid grid-cols-2 gap-5"
    >
      <div className="flex justify-center">
        <img
          className=" w-[65%] object-contain"
          src={verification.src}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 gap-7 px-4">
        <div>
          <h1 className="text-xl font-semibold">Email Verification</h1>
          <p className="text-muted-foreground">
            A verification link has been sent to your email. Please check your
            inbox.
          </p>
        </div>
        <div className="flex justify-center  items-start">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    </motion.div>
  );
}
