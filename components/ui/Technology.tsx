type TechnologyProps = {
  Path: React.ComponentType<{ className: string }>;
  name: string;
};

export default function Technology({ Path, name }: TechnologyProps) {
  return (
    <span className="bg-secondary-bg border-secondary-bg-dark-1 inline-flex items-center gap-2 rounded-[100px] border px-4 py-2 text-xs leading-[100%] font-bold">
      <Path className="h-4.5 w-auto" />
      {name}
    </span>
  );
}
