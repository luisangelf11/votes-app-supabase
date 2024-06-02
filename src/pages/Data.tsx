import Analytics from "../components/Analytics";

export default function Data() {
  return (
    <div className="w-full flex-col justify-center gap-2 items-center">
      <h2 className="uppercase text-center font-bold text-blue-700 text-2xl p-2">Votos emitidos</h2>
      <Analytics />
    </div>
  )
}
