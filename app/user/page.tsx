"use client";

import ROUTES from "@/utils/api-routes.const";

async function fireNewUser() {
  return await fetch(ROUTES.POST.userSetup, {
    method: "POST",
    body: JSON.stringify({
      is_setup: false,
    }),
  });
}

export default function Userpage() {
  return (
    <div className="flex flex-col gap-4">
      <h3>Hi</h3>
      <button className="bg-red-800 text-white p-4" onClick={fireNewUser}>
        Apply New User
      </button>
    </div>
  );
}
