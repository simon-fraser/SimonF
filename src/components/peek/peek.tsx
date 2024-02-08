import clx from '@/utils/clx';
import {GitPullRequest} from 'react-feather';

function Peek() {
  return (<aside className={clx(
    'absolute',
    'bottom-2',
    'right-2',
    'z-20',
    'opacity-50',
    'transition',
    'hover:scale-150',
    'hover:opacity-100'
  )}>
    <a href="https://github.com/simon-fraser/SimonF" title='View the source of this site' target="_blank">
    <GitPullRequest color='white' width='100%' />
    </a>
  </aside>)
}

export default Peek