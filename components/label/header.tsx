export function LabelHeader({ text }: { text: string }) {
  return (
    <h1 className="font-big font-normal tracking-widest no-prose bg-flame-700 px-6 py-3 text-xl text-white rounded-lg uppercase">{text}</h1>
  );
}
