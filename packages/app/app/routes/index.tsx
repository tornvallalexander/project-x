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
        <Spacer />
        <Button size="lg" className="mr-2" arrow>
          Be part of Project X
        </Button>
        <Button size="lg" variant="outline" arrow>
          Be part of Project Z
        </Button>
      </Main>
      <Spacer size="xs" />
    </div>
  );
}
