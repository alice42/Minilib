import styled, { css } from 'styled-components'

const VideoStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${({ width }) => width && css`
    width: ${width};
  `}
  & > div:first-of-type {
    display: flex;
    overflow: hidden;
    ${({ border, theme }) => border && css`
      box-sizing: border-box;
      border: ${typeof border === 'string' ? border : theme.border};
    `}
    ${({ rounded, theme }) => rounded && css`
      border-radius: ${typeof rounded === 'string' ? rounded : theme.borderRadius};
    `}
    ${({ height }) => height && css`
      height: ${height};
    `}

    & > video {
      width: ${({ cover, filled, contain }) => cover || filled || contain ? '100%' : 'unset'};
      filter: ${({ blur }) => 'blur(' + blur + ')'};
      object-fit: ${({ cover, filled, contain }) => filled ? 'fill' : contain ? 'contain' : cover ? 'cover' : 'unset'};
    }
  }
  ${({ customStyle }) => css(customStyle)}
`

export default VideoStyle
