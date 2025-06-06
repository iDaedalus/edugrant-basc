"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
import { useForm } from "react-hook-form";
import AccountDetails from "./account-details";
import PersonalDetails from "./personal-details";
import ReviewInformation from "./review-information";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "../../../components/ui/stepper";
const steps = [
  {
    step: 1,
    title: "Step One",
    description: "Account Information",
  },
  {
    step: 2,
    title: "Step Two",
    description: "Personal Information",
  },
  {
    step: 3,
    title: "Step Three",
    description: "Review Information",
  },
  {
    step: 4,
    title: "Step Four",
    description: "Verification",
  },
];
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { registerData } from "./data-types";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import EmailVerification from "./email-verification";

export default function RegisterClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<registerData>({
    defaultValues: {
      studentId: null,
      studentEmail: "",
      studentContact: null,
      studentFirstName: "",
      studentMiddleName: "",
      studentLastName: "",
      studentGender: "",
      studentAddress: {
        province: "",
        city: "",
        barangay: "",
      },
      studentDateofBirth: "",
      studentCourseYearSection: {
        course: "",
        year: "",
        section: "",
      },
      studentPassword: "",
    },
  });
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const onSubmit = (data: registerData) => {
    alert(JSON.stringify(data, null, 2));
  };
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
      <DrawerContent className="w-[98%] lg:w-[80%] mx-auto h-screen ">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <div className="bg-[var(--eclipse)] px-8 py-4 rounded-lg">
            <Stepper value={currentStep} onValueChange={setCurrentStep}>
              {steps.map(({ step, title, description }) => (
                <StepperItem
                  key={step}
                  step={step}
                  className="max-md:items-start [&:not(:last-child)]:flex-1"
                >
                  <StepperTrigger
                    className="gap-4 max-md:flex-col"
                    disabled={currentStep < step}
                  >
                    <StepperIndicator />
                    <div className="text-center md:-order-1 md:text-left">
                      <StepperTitle>{title}</StepperTitle>
                      <StepperDescription className="max-sm:hidden">
                        {description}
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  {step < steps.length && (
                    <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
                  )}
                </StepperItem>
              ))}
            </Stepper>
          </div>
        </DrawerHeader>

        <div className="overflow-y-auto overflow-x-hidden  no-scrollbar p-8">
          {currentStep === 1 && (
            <AccountDetails
              register={register}
              errors={errors}
              control={control}
            />
          )}
          {currentStep === 2 && (
            <PersonalDetails
              register={register}
              errors={errors}
              control={control}
            />
          )}
          {currentStep === 3 && <ReviewInformation data={watch()} />}
          {currentStep === 4 && <EmailVerification />}
        </div>
        <DrawerFooter className="sticky bottom-0 bg-background">
          <div className="flex justify-end items-center pb-4 px-8 gap-3">
            {currentStep === 1 && (
              <DrawerClose asChild>
                <Button variant="secondary">
                  <X />
                  Close
                </Button>
              </DrawerClose>
            )}
            {currentStep > 1 && (
              <Button
                onClick={() => {
                  setCurrentStep((prev) => prev - 1);
                }}
                variant="outline"
              >
                <ArrowLeft />
                Back
              </Button>
            )}
            {currentStep < steps.length && (
              <Button
                onClick={
                  currentStep === 1 || currentStep === 2
                    ? handleSubmit(() => {
                        setCurrentStep((prev) => prev + 1);
                      })
                    : () => setCurrentStep((prev) => prev + 1)
                }
              >
                Next
                <ArrowRight />
              </Button>
            )}
            {currentStep === 4 && (
              <Button onClick={handleSubmit(onSubmit)}>
                <Ring
                  size={20}
                  speed={2}
                  bgOpacity={0}
                  stroke={4}
                  color="green"
                />
                Submit
              </Button>
            )}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
