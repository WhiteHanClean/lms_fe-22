import React from "react";
import s from "./SideBare.module.scss";
import { Avatar } from "antd";
import profile_avatar from "../../../assets/profile.png";
import { useRouter } from "next/router";
import Link from "next/link";

const SideBare = () => {
  const router = useRouter();

  console.log(router);
  return (
    <div className={s.sidebare}>
      <div className={s.user}>
        <Avatar
          className={s.avatar}
          style={{ width: "96px", height: "96px" }}
          src={profile_avatar.src}
          alt="cartinka"
        />
        <div className={s.user_info}>
          <span className={s.username}>Мария Иванова, 21 год</span>
          <p className={s.work_user}>официант</p>
        </div>
      </div>

      <div className={s.info_analytics}>1 уровень | coin 1346</div>

      <div className={s.tab}>
        <ul>
          <Link href="/">
            <li className={router.pathname == "/" ? s.active : ""}>Главная</li>
          </Link>

          <Link href="/about">
            <li className={router.pathname == "/profile" ? `${s.active}` : ""}>Профиль</li>
          </Link>

          <Link href="/about">
            <li className={router.pathname == "/level" ? s.active : ""}>
              Достижения
            </li>
          </Link>

          <Link href="/about">
            <li className={router.pathname == "/rating" ? s.active : ""}>Рейтинг</li>
          </Link>

          <Link href="/about">
            <li className={router.pathname == "/testing" ? s.active : ""}>
              Тестирование
            </li>
          </Link>

          <Link href="/about">
            <li className={router.pathname == "/library" ? s.active : ""}>
              Библиотека
            </li>
          </Link>

          <Link href="/about">
            <li className={router.pathname == "/shop" ? s.active : ""}>Магазин</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default SideBare;
