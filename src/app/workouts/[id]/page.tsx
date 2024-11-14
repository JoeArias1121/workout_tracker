
export default async function ({
    params,
}: {
  params: Promise<{ id: String }>
}) {
  const { id } = await params
  return (
    <div>
      <h1>Hello this is the workout: {id}</h1>
    </div>
  )
}