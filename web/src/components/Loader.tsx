import ReactDOM from 'react-dom';

export function Loader() {
  return ReactDOM.createPortal(
    <div className="w-full h-full absolute top-0 left-0 bg-ghost-white/80 flex items-center justify-center">
      <div className='text-ultramarine-blue text-8xl -indent-[9999em] overflow-hidden w-[1em] h-[1em] rounded-[50%] my-[72px] mx-auto relative webkit-transform-loader ms-transform-loader transform-loader webkit-animation-loader animation-loader'>

      </div>
    </div>,
    document.getElementById('loader-root')!
  )
}
