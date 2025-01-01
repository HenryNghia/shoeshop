import LayoutDefault from "../layout/layoutDefault";
import Home from "../page/Client/Home";

export const routes = [
    {
        path:"/",
        element: <LayoutDefault />,
        children: [
            {
                path:"/",
                element: <Home />
            }
        ]
    }
]
    

