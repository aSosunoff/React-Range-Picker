import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./RangePicker.module.scss";
import variable from "./variable.module.scss";
import useRange from "../../hooks/useRange";
import BottomBar from "./../BottomBar/BottomBar";
import TimePicker from "./../TimePicker/TimePicker";
import CalendarContainer from "./../CalendarContainer";
import { withAnimation } from "../../HOC/withAnimation";
import { withDayContext } from "../../HOC/withDayContext";
import { withShowDateContext } from "../../HOC/withShowDateContext";
import { useDayContext } from "../../contexts/dayContext";
import { compose } from "../../utils/compose";
import Control from "../Control";
import useFocus from "../../hooks/useFocus";
import { useShowDateContext } from "../../contexts/showDateContext";
import useAddListener from "../../hooks/useAddListener";

const RangePicker = React.forwardRef(
  (
    {
      isOpen,
      startDate,
      endDate,
      onClose,
      onRangeSelected,
      calendarVisibleCount,
      locales,
      style,
    },
    ref
  ) => {
    const {
      startDate: _startDate,
      endDate: _endDate,
      setRangeHandler,
      resetHandler,
      setTimeFromHandler,
      setTimeToHandler,
    } = useRange(startDate, endDate);

    const applyHandler = useCallback(() => {
      onRangeSelected({
        startDate: _startDate,
        endDate: _endDate,
      });
      onClose();
    }, [_startDate, _endDate, onClose, onRangeSelected]);

    const { day } = useDayContext();

    useEffect(() => {
      let from = null;
      let to = null;
      if (!_startDate || _endDate) {
        from = day;
      } else {
        const current = day.getTime();
        to = new Date(Math.max(current, _startDate.getTime()));
        from = new Date(Math.min(current, _startDate.getTime()));
      }
      setRangeHandler(from, to);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day]);

    const { isFocus, setBlur, setFocus } = useFocus();

    const { nextMonthHandler, prevMonthHandler } = useShowDateContext();

    const _handleDocumentLeftRightClick = useCallback(
      (event) => {
        if (isFocus) {
          return;
        }

        if (!isOpen) {
          return;
        }

        if (event.key === "ArrowLeft") {
          prevMonthHandler();
        } else if (event.key === "ArrowRight") {
          nextMonthHandler();
        }
      },
      [isFocus, isOpen, nextMonthHandler, prevMonthHandler]
    );

    useAddListener(document, "keydown", _handleDocumentLeftRightClick);

    return (
      <div
        ref={ref}
        className={cn(styles.rangepicker, variable["range-picker-variable"])}
        style={style}
        data-test-id="range-picker"
      >
        <Control />

        <CalendarContainer
          calendarVisibleCount={calendarVisibleCount}
          startDate={_startDate}
          endDate={_endDate}
          locales={locales}
        />

        <TimePicker
          startDate={_startDate}
          endDate={_endDate}
          onSetTimeStart={setTimeFromHandler}
          onSetTimeEnd={setTimeToHandler}
          onSetBlur={setBlur}
          onSetFocus={setFocus}
        />

        <BottomBar
          startDate={_startDate}
          endDate={_endDate}
          locales={locales}
          applyHandler={applyHandler}
          resetHandler={resetHandler}
        />
      </div>
    );
  }
);

RangePicker.displayName = "RangePicker";

RangePicker.defaultProps = {
  onClose: () => {},
  onRangeSelected: () => {},
  calendarVisibleCount: 2,
  locales: "ru",
};

const defaultProps = {
  isOpen: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onClose: PropTypes.func,
  onRangeSelected: PropTypes.func,
  calendarVisibleCount: PropTypes.number.isRequired,
  locales: PropTypes.string,
};

const animationProps = {
  style: PropTypes.object,
};

RangePicker.propTypes = {
  ...defaultProps,
  ...animationProps,
};

export default compose(
  withShowDateContext,
  withDayContext,
  withAnimation
)(RangePicker);
