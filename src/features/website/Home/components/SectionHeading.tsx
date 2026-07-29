type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-white/68">{description}</p>
    </div>
  );
}
