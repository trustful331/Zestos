import PinInput from "react-pin-input";

const OtpInput = () => {
  return (
    <PinInput
      initialValue={""}
      placeholder="-"
      length={4}
      type="numeric"
      inputMode="number"
      style={{ display: "flex", columnGap: "8px" }}
      inputStyle={{
        flexGrow: 1,
        width: "100%",
        height: "45px",
        color: "#6469E4",
        fontSize: "30px",
        borderWidth: "1px",
        borderRadius: "8px",
        borderColor: "#D0D5DD",
        margin: 0,
      }}
      inputFocusStyle={{
        color: "#6469E4",
        borderColor: "#6469E4",
      }}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
};

export default OtpInput;
