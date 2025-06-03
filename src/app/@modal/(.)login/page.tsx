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
      router.back();
    }
  }, [open, router]);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-2xl tracking-[-3px] zxczxc">
            Login
          </DrawerTitle>
          <DrawerDescription>
            Enter your credentials to access your account.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4  space-y-5">
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
              <span className="underline">Register</span>
            </Label>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
