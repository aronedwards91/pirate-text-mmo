'use client'

import { SubmitButton } from "@/components/button/submit";
import { LabelHeader } from "@/components/label/header";

export function SetupForm() {
  function onSubmit(data: unknown) {
    console.log("data", data);
  }

  return (
    <form className="prose prose-slate" onSubmit={onSubmit}>
      <LabelHeader text="Create your Character" />
      <h3 className="font-big text-2xl font-normal">Create your Character</h3>
      <p>Testing</p>

      <SubmitButton onClick={() => null}>Submit</SubmitButton>
    </form>
  );
}
