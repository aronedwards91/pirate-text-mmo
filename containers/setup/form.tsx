"use client";

import { backgrounds } from "@/app/content/client/setup/background";
import { charClass } from "@/app/content/client/setup/char-class";
import { factions } from "@/app/content/client/setup/faction";
import { startAreas } from "@/app/content/client/setup/start-area";
import { InteractionButton } from "@/components/button/interaction";
import { SubmitButton } from "@/components/button/submit";
import { CardChoice } from "@/components/card/choice";
import { LabelHeader } from "@/components/label/header";
import { ReactNode, useRef, useState } from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

type Character = {
  background: string;
  charClass: string;
  faction: string;
  startArea: string;
};

function RadioInputCard({
  id,
  sectionKey,
  value,
  register,
  header,
  description,
  subDescription,
  img,
}: {
  id: string;
  sectionKey: keyof Character;
  value: string | null;
  register: UseFormRegister<Character>;
  header: string;
  description: string;
  subDescription: ReactNode;
  img: string;
}) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        id={sectionKey + id}
        value={id}
        {...register(sectionKey)}
      />
      <label htmlFor={sectionKey + id} className="cursor-pointer h-full flex flex-col">
        <CardChoice header={header} selected={value === id}>
          <div className="grid grid-cols-2">
            <div className="prose">
              <p>{description}</p>

              {subDescription}
            </div>

            <div className="w-full flex justify-end">
              <div className="corner-cut-alt-border w-fit h-fit p-1">
                <img className="corner-cut-alt-border w-52" src={img} />
              </div>
            </div>
          </div>
        </CardChoice>
      </label>
    </>
  );
}

function BackgroundOptions({
  value,
  register,
}: {
  value: string | null;
  register: UseFormRegister<Character>;
}) {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {Object.entries(backgrounds).map(([id, val]) => (
        <RadioInputCard
          sectionKey="background"
          key={id}
          id={id}
          value={value}
          register={register}
          header={val.title}
          description={val.description}
          subDescription={<p>{val.bonuses.map((v) => v.skillId)} </p>}
          img={val.icon}
        />
      ))}
    </div>
  );
}
function CharClassOptions({
  value,
  register,
}: {
  value: string | null;
  register: UseFormRegister<Character>;
}) {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {Object.entries(charClass).map(([id, val]) => (
        <RadioInputCard
          key={id}
          sectionKey="charClass"
          id={id}
          value={value}
          register={register}
          header={val.title}
          description={val.description}
          subDescription={<p>{val.bonuses.map((v) => v.skillId)} </p>}
          img={val.icon}
        />
      ))}
    </div>
  );
}
function FactionOptions({
  value,
  register,
}: {
  value: string | null;
  register: UseFormRegister<Character>;
}) {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {Object.entries(factions).map(([id, val]) => (
        <RadioInputCard
          key={id}
          id={id}
          sectionKey="faction"
          value={value}
          register={register}
          header={val.title}
          description={val.description}
          subDescription={
            <>
              <p>AGE: {val.age}</p>
              <p>SIZE: {val.size}</p>
              <p>RESOURCES: {val.resources}</p>
            </>
          }
          img={val.icon}
        />
      ))}
    </div>
  );
}
function StartAreaOptions({
  value,
  register,
}: {
  value: string | null;
  register: UseFormRegister<Character>;
}) {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {Object.entries(startAreas).map(([id, val]) => (
        <RadioInputCard
          key={id}
          id={id}
          sectionKey="startArea"
          value={value}
          register={register}
          header={val.title}
          description={val.description}
          subDescription={
            <>
              <p>TYPE: {val.type}</p>
              <p>POP: {val.population}</p>
              <p>WEATHER: {val.weather}</p>
            </>
          }
          img={val.icon}
        />
      ))}
    </div>
  );
}

type FormSections = "background" | "charClass" | "faction" | "startArea";

type NextBtnState = {
  nextView: FormSections;
  isVisible: boolean;
  clearForward: boolean;
};
const nextBtnStates: Record<FormSections, NextBtnState> = {
  background: {
    nextView: "charClass",
    isVisible: true,
    clearForward: false,
  },
  charClass: {
    nextView: "faction",
    isVisible: true,
    clearForward: true,
  },
  faction: {
    nextView: "startArea",
    isVisible: true,
    clearForward: true,
  },
  startArea: {
    nextView: "startArea",
    isVisible: false,
    clearForward: true,
  },
};

export function SetupForm() {
  const [formSection, setFormState] = useState<FormSections>("background");
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Character>();

  const BtnState = nextBtnStates[formSection];

  const onSubmit: SubmitHandler<Character> = (data) => console.log(data);
  const formRef = useRef();

  const background = watch("background");
  const charClass = watch("charClass");
  const faction = watch("faction");
  const startArea = watch("startArea");

  return (
    <form
      ref={formRef.current}
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LabelHeader text="Create your Character" />

      {formSection === "background" && (
        <BackgroundOptions register={register} value={background} />
      )}
      {formSection === "charClass" && (
        <CharClassOptions register={register} value={charClass} />
      )}
      {formSection === "faction" && (
        <FactionOptions register={register} value={faction} />
      )}
      {formSection === "startArea" && (
        <>
          <StartAreaOptions register={register} value={startArea} />
          <SubmitButton onClick={() => null}>Submit</SubmitButton>
        </>
      )}

      {BtnState.isVisible && (
        <InteractionButton
          disabled={!getValues()[formSection]}
          onClick={() => setFormState(BtnState.nextView)}
        >
          Next
        </InteractionButton>
      )}
    </form>
  );
}
