import React from "react";
import s from "./Header.module.scss";
import Button from "@/components/atoms/Button/Button";
import { ArrowLeftOutlined, CommentOutlined, MessageOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={s.headers}>
      <div className={s.header_item}>
        <Button className={"primary"} onClick={() => console.log("ok")}>
          <ArrowLeftOutlined style={{color: "#1E1584"}}/>
        </Button>
        <p>Назад</p>
      </div>

      <p>Профиль</p>

      <div className={s.header_item}>
        <Button className={"active"} onClick={() => console.log("ok")}>
        <CommentOutlined style={{color: "white"}}/>
        </Button>
        <Button className={"active"} onClick={() => console.log("ok")}>
        <MessageOutlined style={{color: "white"}}/>
        </Button>
      </div>
    </div>
  );
};

export default Header;
