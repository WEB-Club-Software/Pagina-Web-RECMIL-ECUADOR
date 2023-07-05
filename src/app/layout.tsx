import './globals.css'

export const metadata = {
  title: 'Recmil',
  description: 'Recmil web page developed to display the information related to the association',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
