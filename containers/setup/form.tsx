"use client";

import { backgrounds } from "@/app/content/client/setup/background";
import { SubmitButton } from "@/components/button/submit";
import { CardChoice } from "@/components/card/choice";
import { LabelHeader } from "@/components/label/header";
import { useRef, useState } from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

type Character = {
  background: string;
  charClass: string;
  faction: string;
  startArea: string;
};

function BackgroundOptions({
  value,
  register,
}: {
  value: string | null;
  register: UseFormRegister<Character>;
}) {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {Object.entries(backgrounds).map(([key, val]) => (
        <div key={key}>
          <input
          className="hidden"
            type="radio"
            id={"background-" + key}
            value={key}
            {...register("background")}
          />
          <label htmlFor={"background-" + key} className="cursor-pointer">
            <CardChoice header={val.title} selected={value === key}>
              <div className="grid grid-cols-2">
                <div className="prose">
                  <p>{val.description}</p>

                  <p>{val.bonuses.map((v) => v.skillId)} </p>
                </div>

                <div className="w-full flex justify-end">
                  <div className="corner-cut-alt-border w-fit p-1">
                    <img
                      className="corner-cut-alt-border w-52"
                      src={val.icon}
                    />
                  </div>
                </div>
              </div>
            </CardChoice>
          </label>
        </div>
      ))}
    </div>
  );
}

export function SetupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Character>();

  function onSubmit(data: unknown) {
    console.log("data", data);
  }
  const formRef = useRef();

  const background = watch("background");

  return (
    <form
      ref={formRef.current}
      className="flex flex-col gap-6"
      onSubmit={onSubmit}
    >
      <LabelHeader text="Create your Character" />
      <p>{background}</p>

      <BackgroundOptions register={register} value={background}/>

      <SubmitButton onClick={() => null}>Submit</SubmitButton>
    </form>
  );
}
