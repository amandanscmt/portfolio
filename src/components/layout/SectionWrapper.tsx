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
        
        px-6
        md:px-12
        lg:px-24
        
        py-24
        md:py-32
        `,
        className
      )}
    >
      {children}
    </section>
  )
}

export default SectionWrapper