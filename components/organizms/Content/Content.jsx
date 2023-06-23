import React from "react";
import s from "./Content.module.scss";
import Button from "@/components/atoms/Button/Button";

const Content = () => {
  return (
    <div className={s.content}>
      <h2>Цели</h2>

      <div className={s.filter_content}>
        <Button className={"active"}>Активные</Button>
        <Button className={"primary"}>Архив</Button>
        <Button className={"primary"}>Новые</Button>
      </div>

      <div className={s.table_content}>
        <div>
          <p>Описание</p>
          <p>Награда</p>
          <p>Прогресс</p>
          <p>Время</p>
        </div>

        
      </div>
    </div>
  );
};

export default Content;
