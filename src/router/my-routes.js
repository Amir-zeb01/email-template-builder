import {
    Home,
    PageBuilder,
    PageRenderer,
    Pages,
    MediaGallery,
} from '../screens';

export const myRoutes = [
    {
        path: '/',
        element: <Home />,
        protected: true,
        layout: true
    },
    {
        path: '/pages',
        element: <Pages />,
        protected: true,
        layout: true
    },
    {
        path: '/pages/:slug',
        element: <PageRenderer />,
        protected: true,
        layout: false
    },
    {
        path: '/page-builder/:id',
        element: <PageBuilder />,
        protected: true,
        layout: false
    },
    {
        path: '/media',
        element: <MediaGallery />,
        protected: true,
        layout: true
    },
]