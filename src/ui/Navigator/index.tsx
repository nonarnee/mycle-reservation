import { NavigatorItemProps, NavigatorProps } from './Navigator.type';
import {
  NavigatorContents,
  NavigatorItem,
  NavigatorSide,
  NavigatorWrapper,
} from './Navigator.style';

export default function Navigator({ contents, prev, next }: NavigatorProps) {
  return (
    <NavigatorWrapper>
      <NavigatorSide>{prev}</NavigatorSide>
      <NavigatorContents>{contents}</NavigatorContents>
      <NavigatorSide>{next}</NavigatorSide>
    </NavigatorWrapper>
  );
}

Navigator.Prev = function ({ icon, disabled, onClick }: NavigatorItemProps) {
  return (
    <NavigatorItem disabled={disabled} onClick={onClick}>
      {icon}
    </NavigatorItem>
  );
};

Navigator.Next = function ({ icon, disabled, onClick }: NavigatorItemProps) {
  return (
    <NavigatorItem disabled={disabled} onClick={onClick}>
      {icon}
    </NavigatorItem>
  );
};
