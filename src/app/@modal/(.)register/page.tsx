"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
export default function RegisterClient() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        router.back();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [open, router]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="w-[80%]  mx-auto">
        <div className="px-8 py-4 grid grid-cols-3 gap-3 h-screen">
          <div className="col-span-3">
            <DrawerHeader>
              <DrawerTitle className="text-2xl tracking-[-3px] zxczxc ">
                REGISTER
              </DrawerTitle>
              <DrawerDescription className="">
                Enter your credentials to register your account.
              </DrawerDescription>
            </DrawerHeader>
          </div>
          <div className="space-y-2">
            <Label>Student ID</Label>
            <Input placeholder="@example" type="number" />
          </div>
          <div className="space-y-2 col-span-2">
            <Label>Email</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label>First name</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label>Middle name</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label>Last name</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="space-y-2 col-span-2">
            <Label>Address</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input placeholder="Enter your password" />
          </div>

          <div className="space-y-2 ">
            <Label>Course / Year / Section</Label>
            <Input placeholder="Enter your password" />
          </div>
          <div className="col-span-3 flex flex-col items-end">
            <div className="flex gap-3">
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </div>
            <div className="flex justify-center items-center py-5">
              <Label>
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Login
                </span>
              </Label>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
