import React from "react";
import { BadgeListData } from "data/BadgeListData";
import BadgeItem from "./BadgeItem";

const BadgeList = ({ data, updateMainBadgeMutation }) => {
  const badgeList = BadgeListData;
  let activeBadges = [];
  if (data.length > 0) {
    activeBadges = data.sort((a, b) => a.badgeId - b.badgeId);
  }

  let activeIds = [];
  for (let i = 0; i < activeBadges.length; i++) {
    activeIds.push(data[i].badgeId);
  }

  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4">
      {badgeList.map((badge, i) => {
        activeIds.includes(i + 1)
          ? (badge.isActive = true)
          : (badge.isActive = false);

        return (
          <BadgeItem
            key={badge.badgeId}
            icon={badge.badgeIcon}
            name={badge.badgeName}
            description={badge.badgeInfo}
            isActive={badge.isActive}
            updateMainBadgeMutation={updateMainBadgeMutation}
          />
        );
      })}
    </div>
  );
};

export default BadgeList;
