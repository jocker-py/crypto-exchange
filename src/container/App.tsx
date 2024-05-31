import { SelectPairs, Typography } from "@/components";
import s from "./App.module.scss";

export const App = () => (
  <div className={s.container}>
    <Typography.Body1 className={s.title}>Crypto Exchange</Typography.Body1>
    <Typography.Subtitle1 className={s.subtitle}>
      Exchange fast and easy
    </Typography.Subtitle1>
    <SelectPairs />
  </div>
);
