import { useEffect, useState } from 'react'
import { useAppSelector } from '../store/hooks'

const ShowReduxState = () => {
  const state = useAppSelector((state) => state)
  const [text, setText] = useState('')
  useEffect(() => setText(JSON.stringify(state, null, 4)), [])
  
  return (
    <>
      <pre className="text-slate-400 bg-slate-800 p-1 min-w-max">
        <code>{text}</code>
      </pre>
    </>
  )
}

export default ShowReduxState
