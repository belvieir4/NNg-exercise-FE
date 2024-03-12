export type InstructorProps = {
  name: string;
  avatar: string;
};

export default function Instructor({ name, avatar }: InstructorProps) {
  return (
    <div className="rounded-xl flex items-center flex-col p-1 gap-[6px]">
      <img className="rounded-full max-w-20 max-h-20" src={avatar} />
      <div className="flex flex-col items-center">
        <span className="leading-6 text-lg text-center text-neutral-0">
          Instructor:
        </span>
        <span className="leading-6 text-lg text-center text-neutral-0">
          {name}
        </span>
      </div>
    </div>
  );
}
