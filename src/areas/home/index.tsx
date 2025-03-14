import React, { useEffect } from "react";
import useAppSelector from "@/hooks";
import { startupService } from "@/services";
import { Heading, Main, Paragraph } from "@/ui-kit";
import { TopNav } from "@/sharedComponents";


const Home: React.FC = () => {

  const { user } = useAppSelector(state => state.currentUser);

  useEffect(() => {
    setTimeout(() => {
      startupService.getCurrentUser();
    }, 1000);
  }, []);

  return (
    <>
      <TopNav />
      
      <Main>

        <Heading size="h3">Home</Heading>

        <Paragraph>
          {JSON.stringify(user, null, 2)}
        </Paragraph>

      </Main>
    </>
  )
}


export default Home;