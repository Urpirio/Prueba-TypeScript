import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";


export default [

    layout('./routes/layout.tsx',[
        index('./pages/home.tsx'),
        route('About' ,'./pages/About.tsx'),
    ])

] satisfies RouteConfig;