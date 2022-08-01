import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import { ButtonProps } from 'components/Button/Button'
import { PlayButton, Range, SkipButton, SeekButton } from 'components'
import { clamp, classNames, hhmmss, noop } from 'utils'
import './MediaControls.styles.scss'

export type MediaControlsProps = {
  buttonVariant?: ButtonProps['variant']
  currentTime?: number | string
  className?: string
  isPlaying?: boolean
  leftPane?: ReactNode
  onPlay?: MouseEventHandler
  onSeek?: Function
  onSkip?: Function
  onTimeSelect?: Function
  rightPane?: ReactNode
  roundButtons?: boolean
  title?: string
  artist?: string
  totalTime?: number
}

const MediaControls: FC<MediaControlsProps> = ({
  buttonVariant = 'fill' as ButtonProps['variant'],
  currentTime = 0,
  className = '',
  isPlaying = false,
  leftPane,
  onPlay = noop,
  onSeek = noop,
  onSkip = noop,
  onTimeSelect = noop,
  rightPane,
  roundButtons = true,
  title = '',
  artist = '',
  totalTime = 0,
}) => {
  const updateTimeout = useRef(null)
  const updateInterval = useRef(null)
  const timeStep = useMemo(() => 0.5, [])

  const updateTime = useCallback(
    (direction: number) => {
      onTimeSelect(
        clamp(Number(currentTime) + timeStep * direction, 0, totalTime)
      )
    },
    [currentTime, totalTime]
  )

  return (
    <aside
      className={classNames({
        'mono-media-controls': true,
        [className]: !!className,
      })}
    >
      <menu className="mono-media-controls__menu">
        {!!leftPane ? (
          <li className="mono-media-controls__item mono-media-controls__pane mono-media-controls__left-pane">
            {leftPane}
          </li>
        ) : (
          <></>
        )}
        <li className="mono-media-controls__item mono-media-controls__controls">
          <menu className="mono-media-controls__menu mono-media-controls__submenu">
            <li className="mono-media-controls__item">
              <SkipButton
                className="mono-media-controls__button"
                direction="backward"
                round={roundButtons}
                variant={buttonVariant}
                onClick={() => onSkip(-1)}
              />
            </li>
            <li className="mono-media-controls__item">
              <SeekButton
                className="mono-media-controls__button"
                direction="backward"
                round={roundButtons}
                variant={buttonVariant}
                onMouseDown={() => updateTime(-4)}
                onKeyDown={({ code }) =>
                  ['Enter', 'Space'].includes(code) && updateTime(-1)
                }
              />
            </li>
            <li className="mono-media-controls__item">
              <PlayButton
                className="mono-media-controls__button"
                isPlaying={isPlaying}
                round={roundButtons}
                variant={buttonVariant}
                onClick={onPlay}
              />
            </li>
            <li className="mono-media-controls__item">
              <SeekButton
                className="mono-media-controls__button"
                direction="forward"
                round={roundButtons}
                variant={buttonVariant}
                onMouseDown={() => updateTime(4)}
                onKeyDown={({ code }) =>
                  ['Enter', 'Space'].includes(code) && updateTime(1)
                }
              />
            </li>
            <li className="mono-media-controls__item mono-media-controls__skip-forward">
              <SkipButton
                className="mono-media-controls__button"
                direction="forward"
                round={roundButtons}
                variant={buttonVariant}
                onClick={() => onSkip(1)}
              />
            </li>
            <li className="mono-media-controls__item mono-media-controls__time">
              <Range
                ariaLabel="Media Time"
                defaultValue={currentTime}
                getMaxText={hhmmss}
                getMinText={(_, __) => hhmmss(+currentTime)}
                getValueText={hhmmss}
                hideLabel
                id="rng-media-time"
                label="Media Time"
                max={totalTime}
                min={0}
                step={1}
                onChange={onTimeSelect}
              />
            </li>
          </menu>
        </li>
        {!!rightPane ? (
          <li className="mono-media-controls__item mono-media-controls__pane mono-media-controls__right-pane">
            {rightPane}
          </li>
        ) : (
          <></>
        )}
      </menu>
    </aside>
  )
}

export default MediaControls
