import '~/styles/app.css'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Start',
}

export default Layout
