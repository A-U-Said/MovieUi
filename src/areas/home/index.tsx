import React, { useEffect } from "react";
import useAppSelector from "@/hooks";
import { startupService } from "@/services";
import { Heading } from "@/ui-kit";


const Home: React.FC = () => {

  const { user } = useAppSelector(state => state.currentUser);

  useEffect(() => {
    setTimeout(() => {
      startupService.getCurrentUser();
    }, 1000);
  }, []);

  return (
    <>
      <main className="flex divide">
        <Heading size="h3" test={{ bottom: "bottom-0", flex: "flex-none" }}>Home</Heading>
        <p className="block whitespace-pre mb-2 text-sm font-medium text-gray-900 dark:text-white">{JSON.stringify(user, null, 2)}</p>
      </main>
    </>
  )
}


export default Home;