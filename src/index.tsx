import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import { mainRouter } from "./routers/main-router"

import "./styles"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>
)
