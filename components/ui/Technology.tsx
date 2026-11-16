type TechnologyProps = {
  Path: React.ComponentType<{ className: string }>;
  name: string;
};

export default function Technology({ Path, name }: TechnologyProps) {
  return (
    <span className="">
      <Path className="" />
      {name}
    </span>
  );
}
