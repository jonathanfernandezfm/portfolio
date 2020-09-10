import React from "react"

interface LayoutProps {
  children?: any
}

const Layout = ({children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
