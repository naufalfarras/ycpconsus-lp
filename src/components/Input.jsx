const Input = ({ type, name, placeholder, rows, className, required }) => {
  return (
    <>
      <div className="relative mt-2">
        {type !== "textarea" && (
          <input
            type={type}
            name={name}
            className={`block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary ${className}`}
            placeholder={placeholder ?? ""}
            defaultValue=""
            aria-invalid="false"
            aria-describedby=""
            required={required}
          />
        )}
        {type === "textarea" && (
          <textarea
            rows={rows}
            name={name}
            className={`block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary ${className}`}
            placeholder={placeholder ?? ""}
            defaultValue=""
            aria-invalid="false"
            aria-describedby=""
            required={required}
          />
        )}
      </div>
    </>
  );
};

export default Input;
