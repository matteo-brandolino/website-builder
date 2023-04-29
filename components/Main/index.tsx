import { getMain } from "@/sanity/sanity-utils";
import getQueryClient from "@/src/utils/getQueryClient";
import Hydrate from "@/src/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import MainPage from "./Main";

export default async function Main() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["main"], getMain);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <MainPage />
    </Hydrate>
  );
}
