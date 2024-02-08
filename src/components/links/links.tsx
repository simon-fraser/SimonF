import { GitHub, Linkedin } from 'react-feather';
import clx from '@/utils/clx';
import IconLink from "@/components/icon-link"

function Links() {
  return (
    <nav className={clx(
      'absolute',
      'flex-col',
      'flex',
      'gap-2',
      'h-screen',
      'justify-center',
      'left-2',
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
