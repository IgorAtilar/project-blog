'use client';
import React from 'react';
import clsx from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'react-feather';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  const id = React.useId();
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      setTimeElapsed(timeElapsed + 1);
    }

    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setTimeElapsed(0);
  };

  React.useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  const selectedColor = COLORS[timeElapsed % COLORS.length];

  return (
    <LayoutGroup>
      <Card as='section' className={styles.wrapper}>
        <ul className={styles.colorsWrapper}>
          {COLORS.map((color, index) => {
            const isSelected = color.value === selectedColor.value;

            return (
              <li className={styles.color} key={index}>
                {isSelected && (
                  <motion.div
                    layoutId={`${id}-selected-outline`}
                    layout={true}
                    className={styles.selectedColorOutline}
                  />
                )}
                <div
                  className={clsx(
                    styles.colorBox,
                    isSelected && styles.selectedColorBox
                  )}
                  style={{
                    backgroundColor: color.value,
                  }}
                >
                  <VisuallyHidden>{color.label}</VisuallyHidden>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.timeWrapper}>
          <dl className={styles.timeDisplay}>
            <dt>Time Elapsed</dt>
            <dd>{timeElapsed}</dd>
          </dl>
          <div className={styles.actions}>
            <button onClick={handlePlay}>
              {isPlaying ? <Pause /> : <Play />}
              <VisuallyHidden> {isPlaying ? 'Pause' : 'Play'}</VisuallyHidden>
            </button>
            <button onClick={handleReset}>
              <RotateCcw />
              <VisuallyHidden>Reset</VisuallyHidden>
            </button>
          </div>
        </div>
      </Card>
    </LayoutGroup>
  );
}

export default CircularColorsDemo;
