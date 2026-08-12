export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white text-slate-900">
      {children}
    </div>
  )
}
