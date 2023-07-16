export default function GeneralLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Hello ROot Layout About</h1>
      {children}
    </div>
  )
}
