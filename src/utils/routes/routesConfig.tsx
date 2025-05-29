import { RouteProps } from 'react-router-dom';
import  Main  from '../../pages/Main/Main';
import  TopicItem  from '../../pages/TopicItem/TopicItem';

export enum AppRoutes {
    MAIN = 'main',
    TOPIC_ITEM= 'topic_item',

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TOPIC_ITEM]: '/topic/:topicName',


};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [AppRoutes.TOPIC_ITEM]: {
        path: RoutePath.topic_item,
        element: <TopicItem />,
    },
};
