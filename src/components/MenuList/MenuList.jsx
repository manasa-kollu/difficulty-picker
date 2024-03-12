import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constants";
function MenuList(props) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => {
        return (
          <MenuListItem
            isSelected={props.difficulty === difficulty}
            onClick={props.onItemClick}
            difficulty={difficulty}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
