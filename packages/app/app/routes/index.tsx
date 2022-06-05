import * as React from "react"
import {Button} from "~/components/button";
import {H1, Paragraph} from "~/components/typography";
import {Main} from "~/components/main";
import {Spacer} from "~/components/spacer";
import {Project} from "~/app/utils/constants";

export default function Page() {
  return (
    <div>
      <Spacer size="xs" />
      <Main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
          <div>
            <H1>Connecting top talent with each other</H1>
            <Paragraph className="mt-3 text-lg">
              At {Project} we are building a community of top talent from all around the world. Our vision is to be
              the place where top talent meets and create meaningful connections.
            </Paragraph>
            <Spacer size="3xs" />
            <Button arrow>
              Be part of {Project}
            </Button>
          </div>
        </div>
        <Spacer />
      </Main>
      <Spacer size="xs" />
    </div>
  );
}
