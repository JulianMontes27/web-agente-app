import { RouteList } from "@/components/business/navigation/dash-sidebar";

export const modifyRoutesWithUserId = (userId: string, routes: RouteList) => {
  return routes.map((route) => {
    return {
      ...route,
      href: `${route.href}/userId=${userId}`,
    };
  });
};
