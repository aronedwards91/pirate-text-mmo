"use client";

import { XP_GRAPH } from "@/utils/progress/skill-xp";

async function testAPI() {
  return await fetch("/api/temp", {
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
      <button className="bg-red-800 text-white p-4" onClick={testAPI}>
        TESTBt
      </button>

      <table>
        <tbody>
          {XP_GRAPH.map((x, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{x}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
