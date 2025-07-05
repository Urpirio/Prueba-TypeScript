import { Outlet,Scripts } from "react-router";

export default function App(){
    return(
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <Outlet/>
            <Scripts/>
        </body>
        </html>
    )
}
