'use client'

export function SetupForm() {
  function onSubmit(data: unknown) {
    console.log("data", data);
  }

  return (
    <form className="prose prose-slate" onSubmit={onSubmit}>
      <h3 className="font-big text-2xl font-medium">Create your Character</h3>
      <p>Testing</p>
    </form>
  );
}
