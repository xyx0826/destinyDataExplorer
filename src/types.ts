import {
  AllDestinyManifestComponents,
  DestinyObjectiveDefinition,
  DestinyInventoryItemDefinition,
  DestinyHistoricalStatsDefinition,
  DestinyPowerCapDefinition,
} from "bungie-api-ts/destiny2";

export type AnyDefinitionTable = AllDestinyManifestComponents[keyof AllDestinyManifestComponents];
export type AnyDefinition = AnyDefinitionTable[keyof AnyDefinitionTable];

export interface BaseDestinyDefinition
  extends Partial<
    DestinyInventoryItemDefinition &
      DestinyObjectiveDefinition &
      DestinyHistoricalStatsDefinition &
      DestinyPowerCapDefinition
  > {
  tierName?: string;
}

export interface ReduxStore {
  definitions: {
    definitions: Partial<AllDestinyManifestComponents>;
  };
}
