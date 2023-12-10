export default function Page({ params }: { params: { id: string } }) {
  return <h1>This is page{`${params}`}</h1>;
}
