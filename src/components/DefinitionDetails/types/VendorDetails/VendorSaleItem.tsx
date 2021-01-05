import { DestinyVendorItemDefinition } from "bungie-api-ts/destiny2";
import Item from "components/Item";
import { useDefinition } from "lib/destinyTsUtils";
import { usePathForDefinition } from "lib/pathForDefinitionContext";
import React from "react";
import s from "../styles.module.scss";

interface VendorSaleItemProps {
  vendorItem: DestinyVendorItemDefinition;
}

const VendorSaleItem: React.FC<VendorSaleItemProps> = ({ vendorItem }) => {
  const pathForItem = usePathForDefinition();
  const itemDef = useDefinition(
    "DestinyInventoryItemDefinition",
    vendorItem.itemHash
  );

  if (!itemDef) {
    return null;
  }

  return (
    // TODO: pathForItem
    <Item
      pathForItem={pathForItem}
      className={s.item}
      key={vendorItem.vendorItemIndex}
      entry={{
        type: "DestinyInventoryItemDefinition",
        def: itemDef,
      }}
      isCollected={false}
      onClick={() => {}}
    />
  );
};

export default VendorSaleItem;
