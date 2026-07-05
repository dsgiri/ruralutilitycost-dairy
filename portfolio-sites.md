# Rural Ops Tools Portfolio

This file serves as the canonical source of truth for the Rural Ops Tools network of applications.

| Priority | Name | Subdomain URL | GitHub Repo | Category | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | Platform | https://ruralopstools.com | RuralOpsTools | Core | The main platform and master ecosystem hub. |
| 2 | Habitat | https://habitat.ruralopstools.com | RuralOpsTools-Habitat | Core | Environmental habitat modeling and management. |
| 3 | Plan | https://plan.ruralopstools.com | RuralOpsTools-Plan | Planning | Master planning and strategy tools. |
| 4 | Forecast | https://forecast.ruralopstools.com | RuralOpsTools-Forecast | Analytics | General rural and agricultural forecasting. |
| 5 | WhatIf | https://whatif.ruralopstools.com | RuralOpsTools-WhatIf | Analytics | Scenario modeling and sensitivity analysis. |
| 6 | Predictor | https://predictor.ruralopstools.com | RuralOpsTools-Predictor | Analytics | Trend prediction and machine learning insights. |
| 7 | Dairy | https://dairy.ruralopstools.com | RuralOpsTools-Dairy | Agriculture | Dairy economics and decision support. |
| 8 | Beef | https://beef.ruralopstools.com | RuralOpsTools-Beef | Agriculture | Beef operations and profitability modeling. |
| 9 | Livestock | https://livestock.ruralopstools.com | RuralOpsTools-Livestock | Agriculture | General livestock management tools. |
| 10 | Feed | https://feed.ruralopstools.com | RuralOpsTools-Feed | Agriculture | Feed costs, rationing, and supply chain. |
| 11 | Pest | https://pest.ruralopstools.com | RuralOpsTools-Pest | Agriculture | Pest management and mitigation planning. |
| 12 | Soil | https://soil.ruralopstools.com | RuralOpsTools-Soil | Agriculture | Soil health, amendments, and sampling. |
| 13 | Aqua | https://aqua.ruralopstools.com | RuralOpsTools-Aqua | Agriculture | Aquaculture economics and planning. |
| 14 | Hydroponic | https://hydroponic.ruralopstools.com | RuralOpsTools-Hydroponic | Agriculture | Hydroponic yield and system modeling. |
| 15 | Greenhouse | https://greenhouse.ruralopstools.com | RuralOpsTools-Greenhouse | Agriculture | Greenhouse environmental and cost modeling. |
| 16 | Land | https://land.ruralopstools.com | RuralOpsTools-Land | Real Estate | Land valuation, acquisition, and utilization. |
| 17 | Price | https://price.ruralopstools.com | RuralOpsTools-Price | Economics | Commodity pricing and market data. |
| 18 | Grid | https://grid.ruralopstools.com | RuralOpsTools-Grid | Infrastructure | Energy grid, utility costs, and power planning. |
| 19 | Storage | https://storage.ruralopstools.com | RuralOpsTools-Storage | Infrastructure | Crop, feed, and equipment storage economics. |
| 20 | Transport | https://transport.ruralopstools.com | RuralOpsTools-Transport | Infrastructure | Freight, logistics, and supply chain tracking. |
| 21 | Weather | https://weather.ruralopstools.com | RuralOpsTools-Weather | Environment | Micro-climate weather forecasting and alerts. |
| 22 | Carbon | https://carbon.ruralopstools.com | RuralOpsTools-Carbon | Environment | Carbon credit, sequestration, and footprint modeling. |
| 23 | Quality | https://quality.ruralopstools.com | RuralOpsTools-Quality | Compliance | Compliance, water quality, and standards monitoring. |
| 24 | USDA | https://usda.ruralopstools.com | RuralOpsTools-USDA | Government | USDA program integration and compliance. |
| 25 | Solve | https://solve.ruralopstools.com | RuralOpsTools-Solve | Utilities | Quick-solve calculators and ad-hoc utility tools. |
| 26 | BreakTime | https://breaktime.ruralopstools.com | RuralOpsTools-BreakTime | Community | Community breaks, forums, and casual networking. |

## Maintenance Notes
- **To add a site:** Append a new row to the table matching the format `| Priority | Name | Subdomain URL | Repo | Category | Description |`.
- **To retire a site:** Do not delete it. Change its Category to `Retired` or add `(Retired)` to its description.
- **Single Source of Truth:** Do not duplicate domain lists in React components. The parser (`src/data/portfolio-parser.ts`) reads this file directly.
