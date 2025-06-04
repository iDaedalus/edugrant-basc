"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
export default function LoginClient() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        router.back();
      }, 200); // Delay in milliseconds

      return () => clearTimeout(timer);
    }
  }, [open, router]);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerContent >
        <div className=" mt-15 px-4">
          <DrawerHeader>
            <DrawerTitle className="text-2xl tracking-[-3px] zxczxc text-center">
              Login
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Enter your credentials to access your account.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4  space-y-10">
            <div className="space-y-2">
              <Label>Student ID</Label>
              <Input placeholder="@example" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
            </div>
            <div className="flex  items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox />
                <Label> Remember me</Label>
              </div>
              <Label className="underline">Forgot password?</Label>
            </div>
          </div>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <div className="flex justify-center items-center py-5">
              <Label>
                Dont&apos; have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => router.push("/register")}
                >
                  Register
                </span>
              </Label>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useRouter } from "next/navigation";
// import bascLogo from "@/assets/basclogo.png";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
// } from "@/components/ui/drawer";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useEffect, useState } from "react";
// import bascImage from "@/assets/BASCjf5989_03 copy.jpg";
// export default function LoginClient() {
//   const router = useRouter();
//   const [open, setOpen] = useState(true);

//   useEffect(() => {
//     if (!open) {
//       router.back();
//     }
//   }, [open, router]);
//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerContent className=" w-[95%] mx-auto">
//         <div className="flex  h-screen ">
//           <div className="w-[40%] rounded-2xl overflow-hidden flex justify-center items-center">
//             <img
//               className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)] "
//               src={bascImage.src}
//               alt=""
//             />
//           </div>
//           <div className="w-[60%] flex justify-center items-center">
//             <div className="w-[50%]">
//               <DrawerHeader>
//                 <DrawerTitle className="text-2xl tracking-[-3px] zxczxc text-center">
//                   WELCOME TO EDUGRANT
//                 </DrawerTitle>
//                 <DrawerDescription className="text-center">
//                   Enter your credentials to access your account.
//                 </DrawerDescription>
//               </DrawerHeader>
//               <div className="p-4  space-y-5">
//                 <div className="space-y-2">
//                   <Label>Student ID</Label>
//                   <Input placeholder="@example" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Password</Label>
//                   <Input placeholder="Enter your password" />
//                 </div>
//                 <div className="flex  items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Checkbox />
//                     <Label> Remember me</Label>
//                   </div>
//                   <Label className="underline">Forgot password?</Label>
//                 </div>
//               </div>

//               <DrawerFooter>
//                 <Button>Submit</Button>
//                 <DrawerClose asChild>
//                   <Button variant="outline">Cancel</Button>
//                 </DrawerClose>
//                 <div className="flex justify-center items-center py-5">
//                   <Label>
//                     Dont&apos; have an account?{" "}
//                     <span className="underline">Register</span>
//                   </Label>
//                 </div>
//               </DrawerFooter>
//             </div>
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// }
