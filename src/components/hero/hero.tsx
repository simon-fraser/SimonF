import clx from "@/utils/clx"

function Hero() {
  return(<article className={clx(
    'absolute',
    'bg-black',
    'bg-opacity-30',
    'flex',
    'h-screen',
    'inset',
    'justify-center',
    'w-screen',
    'z-10'
  )}><div className={clx(
    'drop-shadow-md',
    'flex-col',
    'flex',
    'h-full',
    'items-center',
    'justify-center',
    'prose',
    'px-5',
    'text-center',
    'text-white'
  )}>
    <h1 className="text-white text-6xl mb-0">Hi i’m Simon Fraser</h1>
    <p className="text-lg">A software engineering manager, developer and enterprise <span className="underline" title="and TypeScript">JavaScript</span> application specalist.</p>
  </div></article>)
}
export default Hero