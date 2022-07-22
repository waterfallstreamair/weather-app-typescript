import { useAppSelector } from '../store/hooks'

const ShowReduxState = () => {
  const state = useAppSelector((state) => state)

  return (
    <>
      <pre className="text-slate-400 bg-slate-800 p-1 min-w-max">
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
    </>
  )
}

export default ShowReduxState
