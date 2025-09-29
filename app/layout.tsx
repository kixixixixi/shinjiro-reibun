import "./globals.css"

export const metadata = {
  title: "Page title",
  description: "Page description",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body
        style={{
          background: "#222",
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        }}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
export default RootLayout
