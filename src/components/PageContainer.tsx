import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}
