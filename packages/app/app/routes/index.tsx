import * as React from "react"
import {Button} from "~/components/button";
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
      </Main>
      <Spacer size="xs" />
    </div>
  );
}
