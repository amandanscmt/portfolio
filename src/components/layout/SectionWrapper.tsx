import clsx from "clsx"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={clsx(
        `
        relative
        w-full
        
        px-4
        sm:px-6
        lg:px-12
        xl:px-10
        
        py-12
        sm:py-16
        md:py-24
        lg:py-28
        `,
        className
      )}
    >
      {children}
    </section>
  )
}

export default SectionWrapper