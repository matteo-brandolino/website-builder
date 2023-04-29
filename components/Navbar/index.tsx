import { getNavbar } from "@/sanity/sanity-utils";
import getQueryClient from "@/src/utils/getQueryClient";
import Hydrate from "@/src/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import NavbarPage from "./Navbar";

export default async function Navbar() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["navbar"], getNavbar);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <NavbarPage />
    </Hydrate>
  );
}
