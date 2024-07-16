import Link from 'next/link';

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
      <header className="text-center">
        <h1 className="mb-2 text-2xl font-semibold text-gray-50">{label}</h1>
        <p className="text-sm text-gray-400">{subText}</p>
      </header>
      <div className="my-8">{children}</div>
      <footer>
        <p className="text-sm font-semibold text-gray-300">
          {backButtonLabel}{' '}
          <Link href={backButtonHref} className="text-orange-600">
            {backButtonLink}
          </Link>
        </p>
      </footer>
    </>
  );
};
