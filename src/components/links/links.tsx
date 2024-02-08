import { GitHub, Linkedin } from 'react-feather';
import clx from '@/utils/clx';
import IconLink from "@/components/icon-link"

function Links() {
  return (
    <nav className={clx(
      'relative',
      'py-4',
      'lg:absolute',
      'lg:flex-col',
      'flex',
      'gap-2',
      'lg:h-screen',
      'justify-center',
      'left-3',
      'z-20',
    )}>
      
      <IconLink href="https://www.linkedin.com/in/frasersimon/" title="Find me on LinkedIn">
        <Linkedin color='white' />
      </IconLink>

      <IconLink href="https://github.com/simon-fraser" title="Here is my GitHub account">
        <GitHub color='white' />
      </IconLink>

    </nav>
  )
}

export default Links
