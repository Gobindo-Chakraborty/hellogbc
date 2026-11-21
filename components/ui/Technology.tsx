type TechnologyProps = {
  Path: React.ComponentType<{ className: string }>;
  name: string;
};

export default function Technology({ Path, name }: TechnologyProps) {
  return (
    <span className="bg-soft-light-bg border-secondary-border flex w-max shrink-0 items-center gap-1.25 rounded-full border px-2.25 py-1.5">
      <Path className="h-3 w-auto" />
      <span className="text-primary-text text-[10px] font-medium">{name}</span>
    </span>
  );
}
