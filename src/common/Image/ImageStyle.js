import styled, { css } from 'styled-components'

const imageDefined = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ height }) => height && css`
    height: ${height};
  `}
  ${({ width }) => width && css`
    width: ${width};
  `}
  ${({ rounded, theme }) => rounded && css`
    border-radius: ${typeof rounded === 'string' ? rounded : theme.borderRadius};;
  `}
  ${({ border, theme }) => border && css`
    box-sizing: border-box;
    border: ${typeof border === 'string' ? border : theme.border};
  `}
  filter: ${({ blur }) => 'blur(' + blur + ')'};
`

const ImageStyle = styled.div`
  position: relative;

  ${({ asBackground, mosaic }) => (asBackground || mosaic) && css`
    & > div:first-child {
      ${imageDefined}
      background-position: ${mosaic ? 'left top' : 'center'};
      /* Set Image as background when asBackground=true */
      ${({ src }) => css`background-image: url(${src});`}
      ${({ cover, contain, filled }) => css`
        background-size: ${mosaic ? (typeof mosaic === 'string' ? mosaic : '100px 100px') : filled ? '100% 100%' : contain ? 'contain' : cover ? 'cover' : 'auto'};
      `}
      /* Set background-repeat when mosaic=true */
      background-repeat: ${mosaic ? 'repeat' : 'no-repeat'};
    }
  `}

  & > img {
    ${imageDefined}
    object-fit: ${({ cover, contain, filled }) => filled ? 'fill' : contain ? 'contain' : cover ? 'cover' : 'unset'};
  }
  ${({ customStyle }) => css(customStyle)}
`

export default ImageStyle
