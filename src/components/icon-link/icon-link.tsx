import clx from "@/utils/clx"

interface Props {
  children?: React.ReactNode;
  className?: string;
  href: string;
  title?: string;
}

function IconLink({children, className, href, title}:Props) {
  return (
    <a href={href} target="_blank" title={title} className={clx(
      'bg-emerald-700',
      'block', 
      'drop-shadow-md hover:drop-shadow-xl',
      'duration-200',
      'hover:-translate-y-0.5',
      'hover:scale-110',
      'p-1.5', 
      'rounded', 
      'transition', 
      className
    )}>
      {children}
    </a>
  )
}

export default IconLink