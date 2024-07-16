import Link from "next/link";

interface CardWrapperProps {
  label: string;
  subText?: string;
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonHref: string;
  backButtonLink: string;
}

export const CardWrapper = ({
  label,
  subText,
  children,
  backButtonLabel,
  backButtonHref,
  backButtonLink,
}: CardWrapperProps) => {
  return (
    <>
      <header>
        <h1 className="text-gray-50 text-2xl font-semibold">{label}</h1>
        <p>{subText}</p>
      </header>
      <div className="my-8">{children}</div>
      <footer>
        <p className="text-gray-300 text-sm font-semibold">
          {backButtonLabel}{" "}
          <Link href={backButtonHref} className="text-orange-600">
            {backButtonLink}
          </Link>
        </p>
      </footer>
    </>
  );
};
