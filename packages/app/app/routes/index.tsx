import * as React from "react"
import {ArrowButton, Button} from "~/components/button";
import {H1} from "~/components/typography";
import {Main} from "~/components/main";
import {Spacer} from "~/components/spacer";

export default function Page() {
  return (
    <div>
      <Spacer size="xs" />
      <Main>
        <H1>Gathering the top 1% of developers</H1>
        <Spacer size="3xs" />
        <Button size="lg">
          Be part of Project X
        </Button>
        <Spacer />
        <ArrowButton size="lg" className="mr-2">
          Be part of Project X
        </ArrowButton>
        <ArrowButton size="lg" variant="outline">
          Be part of Project X
        </ArrowButton>
      </Main>
      <Spacer size="xs" />
    </div>
  );
}
