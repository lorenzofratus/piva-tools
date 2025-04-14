import clsx from "clsx/lite";

type NumberInputProps = {
  value?: number;
  onChange?: (value: number) => void;
  prefix?: string;
  suffix?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
};

const NumberInput = (props: NumberInputProps) => {
  const { value, onChange, prefix, suffix, label, disabled = false, className, inputClassName } = props;

  const classString = clsx("fieldset", className);
  const inputClassString = clsx("input validator w-full", inputClassName);

  return (
    <fieldset className={classString}>
      <legend className="fieldset-legend">{label}</legend>
      <label className={inputClassString}>
        {prefix}
        <input
          type="number"
          className="grow"
          required
          title="Inserisci un numero valido"
          value={value !== 0 ? value : ""}
          disabled={disabled}
          onChange={onChange ? (e) => onChange(+e.target.value) : undefined}
        />
        {suffix}
      </label>
      <p className="fieldset-label validator-hint hidden">Inserisci un numero valido</p>
    </fieldset>
  );
};

export default NumberInput;
