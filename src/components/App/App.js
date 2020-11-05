import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "../Button/Button";
import RangePicker from "../RangePicker";

const format = (date) =>
  date.toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const App = () => {
  const targetButton = useRef(null);

  const [isOpen, setOpen] = useState(false);

  const [range, setRange] = useState({ startDate: null, endDate: null });

  const displayRange = useMemo(
    () =>
      range.startDate && range.endDate
        ? `${format(range.startDate)} - ${format(range.endDate)}`
        : range.startDate
        ? `${format(range.startDate)}`
        : null,
    [range.startDate, range.endDate]
  );

  const toggleRangePicker = useCallback(() => setOpen((isOpen) => !isOpen), []);

  const closeRangePicker = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button ref={targetButton} onClick={toggleRangePicker}>
        {displayRange || "Открыть"}
      </Button>

      <RangePicker
        locales="ru"
        isOpen={isOpen}
        {...range}
        onRangeSelected={setRange}
        target={targetButton.current}
        onClose={closeRangePicker}
      />
    </>
  );
};

export default App;
