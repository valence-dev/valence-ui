import { CSSProperties, forwardRef, ReactNode } from "react"
import { OverflowContainer, OverflowContainerProps } from "../OverflowContainer";
import { FlexCenter, FlexCenterProps } from "../Flex";
import { MakeResponsive, useResponsiveProps } from "../../../utilities";

export type PageContainerType =
  FlexCenterProps &
  {
    exemptContent?: ReactNode;

    overflowContainerProps?: OverflowContainerProps;
  }

export const PageContainer = forwardRef(function PageContainer(
  props: MakeResponsive<PageContainerType>,
  ref: any
) {
  const {
    exemptContent,
    children,
    innerWidth = "min(100%, 700px)",
    innerProps,
    overflowContainerProps,
    ...rest
  } = useResponsiveProps<PageContainerType>(props);
  const { 
    style: innerStyle = {
      paddingRight: 10,
      paddingLeft: 10,
    },
    ...innerRest
  } = innerProps || {};
  const {
    direction: ocDirection = "vertical",
    height: ocHeight = "100%",
    innerProps: ocInnerProps = { style: { paddingBottom: 200 } },
    ...overflowRest
  } = overflowContainerProps || {};


  return (
    <OverflowContainer
      direction={ocDirection}
      height={ocHeight}
      innerProps={ocInnerProps}
      {...overflowRest}
    >
      {exemptContent}

      <FlexCenter
        ref={ref}
        width="100%"
        height="100%"
        innerWidth={innerWidth}
        innerProps={{
          style: innerStyle,
          ...innerRest
        }}
        {...rest}
      >
        {children}
      </FlexCenter>
    </OverflowContainer>
  )
});