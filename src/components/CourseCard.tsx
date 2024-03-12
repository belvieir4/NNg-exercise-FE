import { ChangeEventHandler } from "react";
import Instructor from "./Instructor";
import RadioButton from "./RadioButton";
import dayjs from "dayjs";
import timezonePlugin from "dayjs/plugin/timezone";
import DayJSUtc from "dayjs/plugin/utc";

dayjs.extend(DayJSUtc);
dayjs.extend(timezonePlugin);

export type CourseCardProps = {
  firstName: string;
  avatar: string;
  timezone: string;
  id: number;
  dates: number[][];
  amount: number;
  currency: string;
  validUntil: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function CourseCard({
  dates,
  timezone,
  id,
  amount,
  currency,
  validUntil,
  firstName,
  avatar,
  onChange,
}: CourseCardProps) {
  const cityName = timezone.split("/")[1].replace("_", " ");
  const initialDates = dates
    .map((date) => date[0])
    .map((date) => {
      return dayjs.unix(date).tz(timezone);
    });
  const period = dates[0].map((date) => {
    return dayjs.unix(date).tz(timezone);
  });
  const weekDays = initialDates.map((date) => date.format("dddd"));
  const monthDays = initialDates.map((date) => date.format("DD"));

  const hours = period
    .map((date) => date.format("h:mm a").replace(":00", ""))
    .join(" - ");
  const month = period[0].format("MMMM");
  const validDate = dayjs.unix(validUntil).format("MMMM D");
  //This component design doesn't support 2 or more instructors as the JSON suggests and it doesn't covers scenarios like the course having different hour range between the days, and if the courses happens on differents months. To solve those scenarios, I'd talk to the designer to understand what would happen and how the component would look like.

  return (
    <label className="flex flex-col py-8 px-6 border-2 border-neutral-80 m-0.5 rounded-xl gap-1 hover:m-0 focus-within:m-0 hover:border-4 hover:border-primary-20 focus-within:border-4 focus-within:border-blue-50">
      <div className="flex flex-row gap-2 flex-1 items-center">
        <RadioButton value={id} onChange={onChange} name="course" />
        <h3 className="text-primary-30 font-bold text-xl leading-7 align-middle">
          Virtual Course
        </h3>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 ml-8 flex-1">
          {weekDays.length > 1 ? (
            <>
              <span className="leading-9 font-bold text-3xl">{`${weekDays.join(" & ")},`}</span>
              <span className="leading-9 font-bold text-3xl">{`${month} ${monthDays.join(" & ")}`}</span>
            </>
          ) : (
            <span className="leading-9 font-bold text-3xl">{`${weekDays}, ${month} ${monthDays}`}</span>
          )}
          <span className="leading-9 text-3xl">{hours}</span>
          <p className="text-lg leading-6">{cityName} City Time</p>
          <p className="text-lg leading-6 mt-4">
            <span className="font-bold">
              ${amount} {currency}
            </span>{" "}
            Until {validDate}
          </p>
        </div>
        <div className="flex flex-col mr-6">
          <Instructor name={firstName} avatar={avatar} />
        </div>
      </div>
    </label>
  );
}
