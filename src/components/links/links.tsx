import { GitHub, Linkedin } from 'react-feather';

import IconLink from "../icon-link"
import clx from '../../utils/clx';

function Links() {
  return (
    <aside className={clx(
      'absolute',
      'flex-col',
      'flex',
      'gap-2',
      'h-screen',
      'justify-center',
      'left-2',
      'z-10',
    )}>
      
      <IconLink href="https://www.linkedin.com/in/frasersimon/">
        <Linkedin color='white' />
      </IconLink>

      <IconLink href="https://github.com/simon-fraser">
        <GitHub color='white' />
      </IconLink>

    </aside>
  )
}

export default Links
