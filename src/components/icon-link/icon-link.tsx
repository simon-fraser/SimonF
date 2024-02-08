import clx from "@/utils/clx"

interface Props {
  children?: React.ReactNode;
  className?: string;
  href: string;
  title?: string;
}

function IconLink({children, className, href ,title}:Props) {
  return (
    <a href={href} target="_blank" title={title} className={clx(
      'bg-black', 
      'block', 
      'duration-200',
      'hover:-translate-y-0.5',
      'hover:bg-gray-800', 
      'hover:shadow-xl',
      'hover:scale-105',
      'p-1.5', 
      'rounded', 
      'shadow',
      'transition', 
      className
    )}>
      {children}
    </a>
  )
}

export default IconLink