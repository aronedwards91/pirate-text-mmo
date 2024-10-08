"use client";

import { CardChoice } from "@/components/card/choice";
import { Opportunity } from "@/content/types";
import ROUTES from "@/utils/api-routes.const";
import { OpportunityForm } from "@/utils/form-types/opportunity";
import {
  ActivitySquareIcon,
  CoinsIcon,
  PackageOpenIcon,
  PlaySquareIcon,
  SkullIcon,
} from "lucide-react";

// TODO vary coin icon
export function Opportunities({
  opportunities,
}: {
  opportunities: Opportunity[];
}) {
  
  async function onAction(input: OpportunityForm) {
    const response = await fetch(ROUTES.POST.opportunity, {
      method: "POST",
      body: JSON.stringify(input),
    });
    const out = await response.json()

    console.log('response', out)
  }

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      {opportunities.map((opp) => (
        <CardChoice
          key={opp.title}
          header={
            <div className="flex flex-1 justify-between items-center">
              <h3>{opp.title}</h3>
              <div className="flex gap-3 items-center">
                <ActivitySquareIcon size={16} />
                <h6>{opp.action_power_cost}</h6>
                <button
                  className="bg-rust-800 text-white p-4"
                  onClick={() => onAction({ id: opp.id })}
                >
                  <PlaySquareIcon />
                </button>
              </div>
            </div>
          }
        >
          <p className="prose">{opp.description}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <SkullIcon size={16} />
            <h6>{opp.difficulty_tier}</h6>

            <>
              <PackageOpenIcon size={16} />
              <h6>{opp.show_item_drop_chance}%</h6>
            </>
            {opp.currency_1_show && (
              <>
                <CoinsIcon size={16} />
                <h6>
                  {opp.currency_1_drop_min} - {opp.currency_1_drop_max}
                </h6>
              </>
            )}
            {opp.currency_2_show && (
              <>
                <CoinsIcon size={16} />
                <h6>
                  {opp.currency_2_drop_min} - {opp.currency_2_drop_max}
                </h6>
              </>
            )}
          </div>
        </CardChoice>
      ))}
    </div>
  );
}
