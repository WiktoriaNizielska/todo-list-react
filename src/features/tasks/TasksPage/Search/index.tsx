import { ChangeEventHandler } from "react";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Input
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChange}
    />
  );
};
