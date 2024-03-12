import Button from "./Button";
import BookmarkButton from "./BookmarkButton";
import CourseCard from "./CourseCard";
import courses from "../assets/courses.mock.json";
import { useState } from "react";

export default function CourseEnroll() {
  // Usually, I'd get the iD from the URL and make a request to get the favorite state
  const [courseId, setCourseId] = useState<null | number>(null);
  const [isFavCourse, setFavCourse] = useState(false);

  const onEnroll = () => {
    // Usually, I would use navigate from a route library to navigate the user
    window.location.href = `/course/${courseId}/enroll`;
  };

  const onFav = () => {
    // Usually, I'd do a request to change the favorite state
    setFavCourse(!isFavCourse);
  };

  return (
    <div className="px-8 py-6 rounded-xl bg-neutral-100 max-w-[536px] flex flex-col gap-6">
      <h3 className="leading-10 text-4xl font-semibold">Course Dates</h3>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          firstName={course.instructors[0].first_name}
          avatar={course.instructors[0].portrait_image}
          dates={course.dates}
          id={course.id}
          amount={course.pricing.amount}
          currency={course.pricing.currency}
          validUntil={course.pricing.valid_until}
          timezone={course.location.timezone}
          onChange={() => setCourseId(course.id)}
        />
      ))}

      <div className="flex flex-col gap-4 flex-1">
        <Button
          disabled={courseId === null}
          variant="filled"
          onClick={onEnroll}
        >
          Enroll in Course
        </Button>
        <BookmarkButton selected={isFavCourse} onClick={onFav} />
      </div>
    </div>
  );
}
