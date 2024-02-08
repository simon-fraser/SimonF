import clx from '@/utils/clx';
import { GitPullRequest } from 'react-feather';

function Peek() {
  return (<aside className={clx(
    'absolute',
    'bottom-4',
    'hover:opacity-100',
    'hover:scale-150',
    'opacity-50',
    'right-4',
    'transition',
    'z-20',
  )}>
    <a href="https://github.com/simon-fraser/SimonF" title='View the source of this site' target="_blank">
      <GitPullRequest color='white' width='100%' />
    </a>
  </aside>)
}

export default Peek