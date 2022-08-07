import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ButtonProps, PlaythroughButtonProps } from 'components/types'
import {
  Heading,
  Icon,
  IconButton,
  PlayButton,
  PlaythroughButton,
  Range,
  SkipButton,
  SeekButton,
} from 'components'
import { clamp, classNames, hhmmss, noop, uniqueId } from 'utils'

import { MediaControlsProps } from './MediaControls.types'
import './MediaControls.styles.scss'

const timeStep = 0.5

const MediaControls: FC<MediaControlsProps> = ({
  artworkSrc = '',
  artworkAlt = '',
  buttonVariant = 'fill' as ButtonProps['variant'],
  compact = true,
  currentTime = 0,
  disabled = false,
  className = '',
  isPlaying = false,
  onPlay = noop,
  onPlaythroughChange = noop,
  onSeek = noop,
  onSkip = noop,
  onTimeSelect = noop,
  roundButtons = true,
  title = '',
  artist = '',
  totalTime = 0,
}) => {
  // const updateTimeout = useRef(null)
  // const updateInterval = useRef(null)
  const [hideTrackInfo, setHideTrackInfo] = useState<boolean>(false)
  const headerId = useMemo<string>(() => uniqueId(), [])

  const updateTime = useCallback(
    (direction: number): void => {
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
        'mono-media-controls--compact': compact,
        [className]: !!className,
      })}
    >
      <header
        aria-hidden={hideTrackInfo}
        className={classNames({
          'mono-media-controls__header': true,
          'mono-media-controls__header--hidden': hideTrackInfo,
        })}
        id={headerId}
      >
        <IconButton
          ariaControls={headerId}
          ariaExpanded={!hideTrackInfo}
          ariaLabel={`${hideTrackInfo ? 'Expand' : 'Collapse'} track info`}
          className="mono-media-controls__toggle-info"
          size="small"
          iconName={hideTrackInfo ? 'expand_more' : 'expand_less'}
          inline
          onClick={() => setHideTrackInfo(!hideTrackInfo)}
        />
        {title ? (
          <Heading
            as="h6"
            className="mono-media-controls__heading"
            subText={artist}
          >
            {title}
          </Heading>
        ) : (
          <></>
        )}
      </header>
      <menu
        className="mono-media-controls__menu"
        style={{
          backgroundImage: artworkSrc ? `url('${artworkSrc}')` : 'none',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <li className="mono-media-controls__item mono-media-controls__controls">
          <menu className="mono-media-controls__menu mono-media-controls__submenu">
            <li className="mono-media-controls__item">
              <PlaythroughButton
                className="mono-media-controls__button"
                disabled={disabled}
                round={roundButtons}
                variant={buttonVariant}
                onChange={
                  onPlaythroughChange as PlaythroughButtonProps['onChange']
                }
              />
            </li>
            <li className="mono-media-controls__item">
              <SkipButton
                className="mono-media-controls__button"
                direction="backward"
                disabled={disabled}
                round={roundButtons}
                variant={buttonVariant}
                onClick={() => onSkip(-1)}
              />
            </li>
            <li className="mono-media-controls__item">
              <SeekButton
                className="mono-media-controls__button"
                direction="backward"
                disabled={disabled}
                round={roundButtons}
                variant={buttonVariant}
                onMouseDown={() => {
                  updateTime(-4)
                  onSeek(-4)
                }}
                onKeyDown={({ code }) =>
                  ['Enter', 'Space'].includes(code) && updateTime(-1)
                }
              />
            </li>
            <li className="mono-media-controls__item">
              <PlayButton
                className="mono-media-controls__button"
                disabled={disabled}
                isPlaying={isPlaying}
                round={roundButtons}
                variant={buttonVariant}
                onClick={onPlay}
              />
            </li>
            <li className="mono-media-controls__item">
              <SeekButton
                className="mono-media-controls__button"
                disabled={disabled}
                direction="forward"
                round={roundButtons}
                variant={buttonVariant}
                onMouseDown={() => {
                  updateTime(4)
                  onSeek(4)
                }}
                onKeyDown={({ code }) =>
                  ['Enter', 'Space'].includes(code) && updateTime(1)
                }
              />
            </li>
            <li className="mono-media-controls__item mono-media-controls__skip-forward">
              <SkipButton
                className="mono-media-controls__button"
                disabled={disabled}
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
                disabled={disabled}
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
      </menu>
    </aside>
  )
}

export default MediaControls
