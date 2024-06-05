import "./Loader.css"

export default function Loader() {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
