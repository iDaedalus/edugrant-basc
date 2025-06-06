import { registerData } from "./data-types";
import review from "@/assets/undraw_data-input_whqw.svg";
import { motion } from "framer-motion";
interface ReviewInformationProps {
  data: registerData;
}
export default function ReviewInformation({ data }: ReviewInformationProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="grid grid-cols-2 gap-5"
      >
        <div className="grid grid-cols-2 gap-y-7 px-4">
          <div className="col-span-2">
            <h1 className="text-xl font-semibold">Review Information</h1>
            <p className="text-muted-foreground">
              Double-check your personal and account details before submitting.
            </p>
          </div>

          <div>
            <strong>Student ID:</strong> {data.studentId}
          </div>
          <div>
            <strong>Email:</strong> {data.studentEmail}
          </div>
          <div>
            <strong>Contact:</strong> {data.studentContact}
          </div>
          <div>
            <strong>First Name:</strong> {data.studentFirstName}
          </div>
          <div>
            <strong>Middle Name:</strong> {data.studentMiddleName}
          </div>
          <div>
            <strong>Last Name:</strong> {data.studentLastName}
          </div>
          <div>
            <strong>Gender:</strong> {data.studentGender}
          </div>
          <div></div>
          <div>
            <strong>Date of Birth:</strong> {data.studentDateofBirth}
          </div>
          <div>
            <strong>Course / Year / Section:</strong>{" "}
            {data.studentCourseYearSection?.course}
            {data.studentCourseYearSection?.year}
            {data.studentCourseYearSection?.section}
          </div>
        </div>

        <div className=" flex justify-center ">
          <img className=" w-[70%] object-contain" src={review.src} alt="" />
        </div>
      </motion.div>
    </>
  );
}
