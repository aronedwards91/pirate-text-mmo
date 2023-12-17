'use client'

import { SubmitButton } from "@/components/button/submit";
import { CardChoice } from "@/components/card/choice";
import { LabelHeader } from "@/components/label/header";

export function SetupForm() {
  function onSubmit(data: unknown) {
    console.log("data", data);
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <LabelHeader text="Create your Character" />

      <CardChoice header="Header">Inner</CardChoice>

      <SubmitButton onClick={() => null}>Submit</SubmitButton>
    </form>
  );
}
